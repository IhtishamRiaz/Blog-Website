const express = require('express');
const route = express.Router();
const { authenticateAll } = require('../auth/jwt-controller');
const getUser = require('../controllers/users');

// Get User
route.get('/getUser/:id', authenticateAll, getUser);

module.exports = route;
