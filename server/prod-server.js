/*A simple HTTPS server for SPA*/
const path = require('path');
const serveStatic = require('serve-static');
const https = require('https');
const http = require('http');
const fs = require('fs');

const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('./2_juniortour.net.key'),
  cert: fs.readFileSync('./1_juniortour.net_bundle.crt')
};

const port = 4200;

// TODO:OPTIMIZE It is not simple to listen a same port by http and https.

// // set up a route to redirect http to https
// const server = http.createServer((req, res) => {
//   // res.redirect('https://' + req.headers.host + req.url);
//
//   // For potential security issue:
//   res.redirect('https://juniortour.net:4200' + req.url);
// });
//
// server.listen(port);

// serve static assets normally
app.use(express.static(path.join(__dirname, '../dist')));

// handle every other route with index.html for SPA front end router
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(port, function (req, res) {
  console.log(`HTTPS Server is listening on ${port} .`);
});
