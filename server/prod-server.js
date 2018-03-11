/*A simple server for SPA*/
const path = require('path');
const serveStatic = require('serve-static');

const express = require('express');
const app = express();

// serve static assets normally
app.use(express.static(path.join(__dirname, '../dist')));

// handle every other route with index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = 4200;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});
