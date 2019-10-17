const express = require('express');

const Cities = require('../cities/cities-models');

const server = express();

server.use(express.json());

module.exports = server;
