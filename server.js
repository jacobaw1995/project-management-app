 
const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON requests

// Sample endpoints for your prototype
app.get('/', (req, res) => {
  res.send('Welcome to your Project Management App!');
});

app.get('/projects', (req, res) => {
  res.json([
    { id: 1, name: 'Project 1', description: 'First project' },
    { id: 2, name: 'Project 2', description: 'Second project' }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});