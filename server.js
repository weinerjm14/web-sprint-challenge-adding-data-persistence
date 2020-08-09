const express = require('express');

const ProjectsRouter = require('./projects/projectsRouter');

const server = express();

server.use(express.json());
server.use('/', ProjectsRouter);

module.exports = server;
