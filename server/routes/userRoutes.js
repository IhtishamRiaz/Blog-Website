const express = require('express');
const { userModel } = require('../Schema/userSchema');
const route = express.Router();
const { authenticateAll } = require('../controllers/jwt-controller')

// get User
route.get('/getUser/:id', authenticateAll, async (req, res) => {
    try {
        const result = await userModel.findById(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

module.exports = route;
