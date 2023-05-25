const express = require('express');
const route = express.Router();
const { authenticateAll, authenticateOwner } = require('../auth/jwt-controller');
const { addComment, getAllComments, deleteComment, updateComment } = require('../controllers/comments');

// Add Comment
route.post('/addComment', authenticateAll, addComment);

// Get Comments
route.get('/getComments', getAllComments);

// Delete Comment
route.delete('/delComment/:id', authenticateOwner, deleteComment);

// Update Comment
route.patch('/updateComment/:id', authenticateOwner, updateComment);

module.exports = route;