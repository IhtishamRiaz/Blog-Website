const express = require('express');
const multer = require('multer');
const postModel = require('../Schema/postSchema');
const route = express.Router();
const { authenticate } = require('../controllers/jwt-controller');

// Post Pic
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
        const { title, postContent, category, postAuthor, postAuthorId, postAuthorImg } = req.body;
        const newPost = new postModel({
            title,
            postContent,
            category,
            postImage,
            postAuthor,
            postAuthorId,
            postAuthorImg
        });
        await newPost.save();
        res.status(201).json("Post Created Successfully");
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
});

// get Posts
route.get('/getPosts', async (req, res) => {
    try {
        const result = await postModel.find({});
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json("Posts Not Found");
    }
})

module.exports = route;