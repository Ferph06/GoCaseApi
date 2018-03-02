'use strict';
const mongoose = require('mongoose');
const conexion=require('../config/Conexion');
const Schemas=require('../config/Schemas');
const bluebird=require('bluebird');
bluebird.promisifyAll(mongoose);
conexion.inciarConexion();
const Usuario=mongoose.model("Usuarios",Schemas.Usuarios);


module.exports.Usuario=Usuario;