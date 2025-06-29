const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle routes for your HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'quiz.html'));
});

app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'quiz.html'));
});

app.get('/senha', (req, res) => {
  res.sendFile(path.join(__dirname, 'senha.html'));
});

app.get('/resultado', (req, res) => {
  res.sendFile(path.join(__dirname, 'resultado.html'));
});

app.get('/verificar', (req, res) => {
  res.sendFile(path.join(__dirname, 'verificar.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});