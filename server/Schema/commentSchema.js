const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentContent: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;