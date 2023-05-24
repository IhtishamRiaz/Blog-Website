const express = require('express');
const { authenticateAll, authenticateOwner } = require('../controllers/jwt-controller');
const route = express.Router();
const commentModel = require('../Schema/commentSchema');

// Create Comment
route.post('/addComment', authenticateAll, async (req, res) => {
    try {
        const { commentContent, created, updated, commentAuthor, commentAuthorId, commentAuthorImg, postId, ratings } = req.body;
        const comment = new commentModel({
            commentContent,
            created,
            updated,
            commentAuthor,
            commentAuthorId,
            commentAuthorImg,
            postId,
            ratings
        });
        await comment.save();
        res.status(201).json({ message: "Comment Added Successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get Comments
route.get('/getComments', async (req, res) => {
    try {
        const result = await commentModel.find({});
        res.status(201).json(result)
    } catch (error) {
        res.status(404).json({ message: "Comment(s) Not Found" });
    }
});

// Delete Comment
route.delete('/delComment/:id', authenticateOwner, async (req, res) => {
    try {
        const result = await commentModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Comment Deleted Successfully!" });
    } catch (error) {
        res.status(404).json({ message: "Comment Not Found" });
    }
})

// Update Comment
route.patch('/updateComment/:id', authenticateOwner, async (req, res) => {
    try {
        const { commentContent, updated, ratings } = req.body;
        const fieldsToUpdate = {
            commentContent: commentContent,
            updated: updated,
            ratings: ratings
        }
        await commentModel.findByIdAndUpdate(req.params.id, { $set: fieldsToUpdate });
        res.status(200).json({ message: "Comment Updated Successfully!" });
    } catch (error) {
        res.status(304).json({ message: "Couldn't Update Comment!" });
    }
})

module.exports = route;