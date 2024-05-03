const express = require('express');
const router = express.Router();
const users = require('../controllers/adminPassword');
router.get('/password', users.adminPassword);
module.exports = router