const express = require('express');
const route = express.Router();
const multer = require('multer');
const register = require('../controllers/register');

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
route.post('/register', upload.single('profileImage'), register);

module.exports = route;