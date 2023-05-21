const jwt = require('jsonwebtoken');
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

module.exports = { authenticate, authenticateAll };