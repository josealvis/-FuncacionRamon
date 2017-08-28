var express = require('express');
var paticipantes  = require('./participantesRoutes');

var routes = express();

routes.use('/', paticipantes);

module.exports = routes;

