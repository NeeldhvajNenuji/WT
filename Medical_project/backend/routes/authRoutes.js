const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

const app = express();

// Signup route
app.post('http://localhost:3000/signup', signup);

// Login route
app.post('/login', login);

module.exports = app;