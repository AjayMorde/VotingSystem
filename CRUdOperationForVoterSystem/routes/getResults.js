const express = require('express');
const router = express.Router();
const routes = require('../controllers/getResults');


router.get('/get-results', routes.getVotingData);

module.exports = router;