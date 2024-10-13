const express = require('express');  // Import express
const path = require('path');        // Built-in Node.js module for handling file paths

const app = express();  // Create the express app
const port = 3000;      // Define the port number

// Serve static files from the "public" folder (CSS, images, etc.)
app.use(express.static('public'));

// Set up a route for the homepage
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Serve the HTML file
});

// Start the server and listen on port 3000
app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});
