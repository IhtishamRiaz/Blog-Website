const express = require('express');
const { userModel, validate } = require('../Schema/userSchema');
const bcrypt = require('bcrypt');
const route = express.Router();
const multer = require('multer');

// Profile Image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// User Register
route.post('/register', upload.single('profileImage'), async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const { firstName, lastName, gender, mobile, age, password, email } = req.body;

        const isUser = await userModel.findOne({ email: email });
        if (isUser) return res.status(409).send({ message: "User with given email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        if (req.file) {
            const profileImage = req.file.filename;
            await new userModel({ firstName, lastName, gender, mobile, age, password: hashedPassword, email, profileImage }).save();

        } else {
            await new userModel({ firstName, lastName, gender, mobile, age, password: hashedPassword, email }).save();
        }
        res.status(201).send({ message: "User Created Successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = route;