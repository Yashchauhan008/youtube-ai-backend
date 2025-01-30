// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 502;  // Changed port to 502

// // Enable CORS
// app.use(cors());

// // Parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Middleware to handle YouTube URLs
// app.use('*', (req, res, next) => {
//   let fullPath = req.originalUrl.slice(1); // Remove the leading slash
  
//   // Check if it's a YouTube URL
//   if (fullPath.includes('youtube.com/watch')) {
//     try {
//       // Create URL object from the full path
//       const url = new URL(fullPath);
//       const videoId = url.searchParams.get('v');
      
//       if (!videoId) {
//         return res.status(400).json({ error: 'Video ID not found in URL' });
//       }
      
//       // Redirect to localhost:3000/{videoId}
//       res.redirect(`http://localhost:3000/${videoId}`);
//     } catch (error) {
//       res.status(400).json({ error: 'Invalid URL format' });
//     }
//   } else {
//     res.status(400).json({ error: 'Not a valid YouTube URL' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const port = 502; // Changed port to 502

// Import routes
const youtubeRoutes = require('./routes/youtube');

// Enable CORS
app.use(cors());

// Parse URL-encoded bodies and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use YouTube routes
app.use('*', youtubeRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
