const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: () => Date.now()
    }
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;