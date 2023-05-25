const express = require('express');
const multer = require('multer');
const route = express.Router();
const { authenticate, authenticatePostOwner } = require('../auth/jwt-controller');
const { createPost, getAllPosts, editPost, deletePost } = require('../controllers/posts');

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
route.post('/createPost', authenticate, upload.single('postImage'), createPost);

// get Posts
route.get('/getPosts', getAllPosts);

// Edit Post
route.patch('/editPost/:id', authenticatePostOwner, upload.single('postImage'), editPost);

// Delete Posts
route.delete('/deletePost/:id', authenticatePostOwner, deletePost);

module.exports = route;