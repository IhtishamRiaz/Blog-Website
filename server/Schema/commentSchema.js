const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentContent: {
        type: String,
        required: true
    },
    created: {
        type: String,
        default: ''
    },
    updated: {
        type: String,
        default: ''
    },
    commentAuthor: {
        type: String,
        required: true
    },
    commentAuthorId: {
        type: String,
        required: true
    },
    commentAuthorImg: {
        type: String,
        default: ''
    },
    postId: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        min: 0.5,
        required: true
    }
});

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;