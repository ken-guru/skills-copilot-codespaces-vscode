// Create web server
const express = require('express');
const app = express();

// Create a route for the path /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server on port 4001
app.listen(4001, () => {
  console.log('Your app is listening on port 4001!');
});