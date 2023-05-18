const express = require('express');
const multer = require('multer');
const postModel = require('../Schema/postSchema');
const route = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
})
const upload = multer({ storage: storage });

route.post('/createPost', upload.single('postImage'), async (req, res) => {
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
route.get('/getPosts', async (req, res) => {
    try {
        const result = await postModel.find({});
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
})

module.exports = route;