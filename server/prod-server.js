const path = require('path');
const serveStatic = require('serve-static');

const express = require('express');
const app = express();

// Simple serve static package: https://www.npmjs.com/package/serve-static
app.use(serveStatic(path.join(__dirname, '../dist'), {'index': ['index.html', 'index.htm']}));

const port = 4200;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});
