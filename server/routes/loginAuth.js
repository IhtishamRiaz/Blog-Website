const express = require('express');
const route = express.Router();
const loginAuth = require('../controllers/login');

// Login Auth
route.post('/login', loginAuth);

module.exports = route;