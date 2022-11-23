var artModelo = require('../modelo/artista');
// var Album = require('../modelo/album');
// var Cancion = require('../modelo/cancion');

// var fs = require('fs');
// var path = require('path');
// const { param } = require('../rutas/usuarioRuta');
var artista = new artModelo();
// var mongoosePagina = require('mongoose-pagination');


// function instertArtista(req, res) {
//     var datosArtista = req.body; //post
//     artista.nombre = datosArtista.nombre;
//     artista.descripcion = datosArtista.descripcion;
//     artista.imagen = "";

//     artista.save((err, artistaBD) => {
//         if (err) {
//             res.status(500).send({ mensaje: 'Error en el almacenamiento del Artista' });
//         } else {
//             if (!artista) {
//                 res.status(404).send({ menssaje: 'No se pudo almacenar ' })
//             } else {
//                 res.status(200).send({
//                     artista: artistaBD,
//                     menssaje: 'Artista Registrado '
//                 });
//             }
//         }
//     });
// }
function registarArtista(req, res) {
    var params = req.body;
    artista.nombre = params.nombre;
    artista.descripcion = params.descripcion;
    artista.imagen = "";

    if (artista.nombre != null && artista.descripcion != null) {
        artista.save((error, registroAlmacenado) => {
            if (error) {
                res.status(500).send({ message: 'Error al guardar el artista' });
            } else {
                if (!registarArtista) {
                    res.status(404).send({ message: 'Ingresaste algun dato equivocado' });
                } else {
                    res.status(200).send({ artista: registroAlmacenado });
                }
            }
        });
    } else {
        res.status(500).send({ messaje: 'Introduce los datos' })
    }
}

function getArtista(req, res) {
    var artistId = req.params.id;
    artModelo.findById(artistId, (err, artistaBD) => {
        if (err) {
            res.status(500).send({ messaje: 'Error de la peticion ' });
        } else if (!artistaBD) {
            res.status(404).send({ messaje: 'El arista no existe' });
        } else if (artistaBD) {
            res.status(200).send({ artista: artistaBD });
        }
    });
}

function borrarArtista(req, res) {
    var artistaId = req.params.id;
    artModelo.findByIdAndRemove(artistaId, (err, artistaRemovido) => {
        if (err) {
            res.status(500).send({
                messaje: 'Error al eliminar al artista'
            });
        } else {
            res.status(200).send({
                artista: artistaRemovido,
                messaje: 'Artista removido'
            });
        }
    });
}

module.exports = {
    registarArtista,
    getArtista,
    borrarArtista
}