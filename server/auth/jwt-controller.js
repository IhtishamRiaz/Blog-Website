const jwt = require('jsonwebtoken');
const commentModel = require('../Schema/commentSchema');
const postModel = require('../Schema/postSchema');
require('dotenv').config();

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ message: 'Token is missing' });

    jwt.verify(token, process.env.ACCESS_SCERET_KEY, (error, user) => {
        if (error) return res.status(403).json({ message: 'Invalid token' });

        if (user.role === 'user') return res.status(403).json({ message: 'Not Allowed' });
        req.user = user;
        next();
    });
}

const authenticateAll = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ message: 'Token is missing' });

    jwt.verify(token, process.env.ACCESS_SCERET_KEY, (error, user) => {
        if (error) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
}

const authenticateOwner = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ message: 'Token is missing' });

    const comment = await commentModel.findById(req.params.id);

    jwt.verify(token, process.env.ACCESS_SCERET_KEY, (error, user) => {
        if (error) return res.status(403).json({ message: 'Invalid token' });

        if (comment?.commentAuthorId !== user._id) return res.status(403).json({ message: 'Not Allowed' });
        req.user = user;
        next();
    });
}

const authenticatePostOwner = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ message: 'Token is missing' });

    const post = await postModel.findById(req.params.id);

    jwt.verify(token, process.env.ACCESS_SCERET_KEY, (error, user) => {
        if (error) return res.status(403).json({ message: 'Invalid token' });

        if (post?.postAuthorId !== user._id) return res.status(403).json({ message: 'Not Allowed' });
        req.user = user;
        next();
    });
}
module.exports = { authenticate, authenticateAll, authenticateOwner, authenticatePostOwner };