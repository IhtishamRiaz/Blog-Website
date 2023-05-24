const express = require('express');
const { userModel } = require('../Schema/userSchema');
const tokenModel = require('../Schema/token');
const bcrypt = require('bcrypt');
const route = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validate = (data) => {
    const JoiSchema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    })
    return JoiSchema.validate(data);
}

route.post('/login', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const { email, password } = req.body;
        const isUser = await userModel.findOne({ email: email });
        if (!isUser) return res.status(401).send({ message: "Invalid Email or Password" });

        const isPassword = await bcrypt.compare(password, isUser.password);
        if (!isPassword) return res.status(401).send({ message: "Invalid Email or Password" });

        const accessToken = jwt.sign(isUser.toJSON(), process.env.ACCESS_SCERET_KEY, { expiresIn: '1d' });
        const refreshToken = jwt.sign(isUser.toJSON(), process.env.REFRESH_SCERET_KEY);

        const newToken = new tokenModel({ token: refreshToken });
        await newToken.save()

        res.status(200).json({
            accessToken: accessToken,
            refreshToken: refreshToken,
            userRole: isUser.role,
            userName: `${isUser.firstName} ${isUser.lastName}`,
            userId: isUser._id
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = route;