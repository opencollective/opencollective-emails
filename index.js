const path = require('path');
const express = require('express');

const { builder, file, app } = require('@eymail/editor/lib/server');

require('./eymail.config')({ builder });

// Register local directory
file.setTemplateDir(path.resolve(__dirname, 'templates'));

// Expose Webpack bundle
app.use(express.static(path.resolve(__dirname, 'build')));

const server = app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('EyeMail listening at http://%s:%s', host, port);
});
