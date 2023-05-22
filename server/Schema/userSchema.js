const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passwordComplexity = require('joi-password-complexity');
const Joi = require('joi');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin', 'superAdmin'],
        immutable: true,
        default: "user"
    },
    regDate: {
        type: Date,
        default: () => Date.now()
    },
    profileImage: {
        type: String,
        default: ''
    }
});

const userModel = mongoose.model('user', userSchema);

const validate = (data) => {
    const JoiSchema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        profileImage: Joi.string().valid('').optional().label("Profile Image"),
        email: Joi.string().email().required().label("Email"),
        mobile: Joi.string().required().label("Mobile"),
        gender: Joi.string().required().label("Gender"),
        password: passwordComplexity().required().label("Password"),
        cPassword: Joi.any().equal(Joi.ref('password')).required().label('Confirm password').messages({ 'any.only': '{{#label}} does not match' })
    })
    return JoiSchema.validate(data);
}

module.exports = { userModel, validate };