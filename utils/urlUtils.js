module.exports.extractVideoIdFromURL = function (url) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.searchParams.get('v'); // Extract video ID (v parameter)
    } catch (error) {
      throw new Error('Invalid YouTube URL format');
    }
  };
  