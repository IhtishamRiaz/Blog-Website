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
    },
    postAuthor: {
        type: String,
        required: true
    },
    postAuthorId: {
        type: String,
        required: true
    },
    postAuthorImg: {
        type: String,
        required: true
    },

});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;