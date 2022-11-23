var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var user_routes = require('./rutas/usuarioRuta');
var artist_ruta = require('./rutas/artistaRuta');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar cabeceras http

//ruta base

app.use('/api', user_routes);
app.use('/api', artist_ruta);

// app.get('/pruebas', function(req, res) {
//     res.status(200).send({ mesage: 'Bienvenido al curso Alberto Soriano' });
// });

module.exports = app;