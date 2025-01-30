const { extractVideoIdFromURL } = require('../utils/urlUtils');

exports.handleYouTubeRedirect = (req, res) => {
  const fullPath = req.originalUrl.slice(1); // Remove leading slash from URL

  // Check if the full path contains a YouTube URL
  if (fullPath.includes('youtube.com/watch')) {
    try {
      // Extract video ID using utility function
      const videoId = extractVideoIdFromURL(fullPath);
      
      if (!videoId) {
        return res.status(400).json({ error: 'Video ID not found in URL' });
      }

      // Redirect to the new URL with video ID
      return res.redirect(`http://localhost:3000/${videoId}`);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }
  } else {
    return res.status(400).json({ error: 'Not a valid YouTube URL' });
  }
};
