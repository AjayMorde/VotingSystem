const express = require('express');
const router = express.Router();
const votingController = require('../controllers/voting');
const userautheticate = require('../middleware/auth');

router.post('/submit-vote', userautheticate.authenticate, votingController.submitVote);

module.exports = router;