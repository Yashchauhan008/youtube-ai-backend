module.exports = function validateYouTubeURL(req, res, next) {
    const fullPath = req.body.url;
  
    if (!fullPath || !fullPath.includes('youtube.com/watch')) {
      return res.status(400).json({ error: 'Not a valid YouTube URL' });
    }
  
    next();
  };
  