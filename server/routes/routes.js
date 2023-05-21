const express = require('express');
const multer = require('multer');
const postModel = require('../Schema/postSchema');
const route = express.Router();
const { authenticate } = require('../controllers/jwt-controller');

// Posts Routes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
})
const upload = multer({ storage: storage });

// create Posts
route.post('/createPost', authenticate, upload.single('postImage'), async (req, res) => {
    try {
        const postImage = req.file.filename;
        const { title, postContent, category } = req.body;
        const newPost = new postModel({
            title,
            postContent,
            category,
            postImage
        });
        const result = await newPost.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message)
    }
});

// get Posts
route.get('/getPosts', async (req, res) => {
    try {
        const result = await postModel.find({});
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
})

module.exports = route;