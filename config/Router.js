const express = require('express');
const api = express.Router();
const UsuarioController=require('../controllers/UsuarioController');
const PostController=require('../controllers/PostController');
//Usuario
api.get('/goapi/obtenerUsuarios',UsuarioController.getAll);
api.post('/goapi/crearUsuario',UsuarioController.create);
api.get('/goapi/buscarUsuario/:id',UsuarioController.findById);
api.put('/goapi/borrarusuario/:id',UsuarioController.remove)
//Post
api.post('/goapi/obtenerPost',PostController.getAll);
api.post('/goapi/crearPost',PostController.create);

module.exports.api=api;