var express = require('express');
var artControl = require('../controlador/artistaControl');
var api = express.Router();

var multipart = require('connect-multiparty');
// api.post('/insertarArtista', artControl.instertArtista);
api.get('/mostrarArtista/:id', artControl.getArtista);
api.delete('/borrarArtista/:id', artControl.borrarArtista);
api.post('/resgistrarArtista', artControl.registarArtista);

module.exports = api;