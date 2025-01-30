const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeController');

// Handle YouTube URL parsing and redirecting
router.all('*', youtubeController.handleYouTubeRedirect);

module.exports = router;
