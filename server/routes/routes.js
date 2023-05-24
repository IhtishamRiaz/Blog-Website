const express = require('express');
const multer = require('multer');
const postModel = require('../Schema/postSchema');
const route = express.Router();
const { authenticate, authenticatePostOwner } = require('../controllers/jwt-controller');
const commentModel = require('../Schema/commentSchema');

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
        res.status(201).json("Post Created Successfully!");
    } catch (error) {
        res.status(500).json("Internal Server Error!")
    }
});

// get Posts
route.get('/getPosts', async (req, res) => {
    try {
        const result = await postModel.find({});
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json("Posts Not Found!");
    }
})

// Edit Post
route.patch('/editPost/:id', authenticatePostOwner, upload.single('postImage'), async (req, res) => {
    try {
        const { title, postContent, category } = req.body;
        const fieldsToUpdate = {
            title: title,
            postContent: postContent,
            category: category
        }
        if (req.file) {
            fieldsToUpdate["postImage"] = req.file.filename;
        }

        await postModel.findByIdAndUpdate(req.params.id, { $set: fieldsToUpdate });
        res.status(200).json({ message: "Post Updated Successfully!" });
    } catch (error) {
        res.status(304).json({ message: "Couldn't Update Post!" });
    }
})

// Delete Posts
route.delete('/deletePost/:id', authenticatePostOwner, async (req, res) => {
    try {
        const postId = req.params.id;
        const allComments = await commentModel.find({});

        const commentsOfPost = allComments.filter((comment) => {
            return comment.postId === postId;
        })

        const allIdsToBeDeleted = commentsOfPost.map((comment) => {
            return comment._id;
        })

        await commentModel.deleteMany({ _id: { $in: allIdsToBeDeleted } })
        await postModel.findByIdAndDelete(postId);
        res.status(200).json({ message: "Post Deleted Successfully!" });
    } catch (error) {
        res.status(404).json({ message: "Post Not Found!" });
    }
})

module.exports = route;