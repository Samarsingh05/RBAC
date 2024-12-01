const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const router = express.Router();

router.get('/admin', authenticate, authorize(['Admin']), (req, res) => {
    res.json({ message: 'Welcome, Admin!' });
});

router.get('/user', authenticate, authorize(['User', 'Admin']), (req, res) => {
    res.json({ message: 'Welcome, User!' });
});

router.get('/moderator', authenticate, authorize(['Moderator']), (req, res) => {
    res.json({ message: 'Welcome, Moderator!' });
});

module.exports = router; // Ensure this line exports the router instance
