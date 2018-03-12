/*A simple HTTPS server for SPA*/
const path = require('path');
const serveStatic = require('serve-static');
const https = require('https');
const fs = require('fs');

const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('./2_juniortour.net.key'),
  cert: fs.readFileSync('./1_juniortour.net_bundle.crt')
};

// serve static assets normally
app.use(express.static(path.join(__dirname, '../dist')));

// handle every other route with index.html for SPA front end router
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = 4200;
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(port, function (req, res) {
  console.log(`HTTPS Server is listening on ${port} .`);
});
