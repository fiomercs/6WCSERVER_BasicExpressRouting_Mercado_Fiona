// Mercado, Fiona Veronica A.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.path === '/' || req.path.endsWith('.html') || ['/menu', '/about', '/contact'].includes(req.path)) {
    const pageName = req.path === '/' ? 'index.html' : path.basename(req.path, '.html') + '.html';
    console.log(`Rendering ${pageName}`);
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});