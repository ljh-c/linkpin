const express = require('express');
const server = express();

const configureMiddleware = require('./middleware-config');
configureMiddleware(server);

server.get('/', (req, res) => {
  res.json({ message: 'Linkpin is live' });
});

module.exports = server;
