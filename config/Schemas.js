'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let validar=function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
const Usuarios=new Schema({
	nombre:{
		type:String,
		required:[true,'Hace falta el nombre']
	},
	aPaterno:{
		type:String,
		required:[true,'Hace falta el apellido paterno']
	},
	aMaterno:{
		type:String,
		required:[true,'hace falta el apellido materno']
	},
	email:{
		type:String,
		unique:true,
		required:[true,'Email requerido para la cuenta'],
		validate:[validar,'el email no tiene el formato indicado']
	},
	claveUsuario:{
		type:String,
		required:[true,'Contraseña requerida']
	},
	borrado:{
		type:Boolean,
		default:false
	}

});

const Post=new Schema({
	titulo:{
		type:String,
		required:[true,'Hace falta un titulo para poder publicar']
	},
	contenido:{
		type:String,
		required:[true,'No puede dejar vacia la publicacion']
	},
	borrado:{
		type:Boolean,
		default:false
	},
	reportes:{
		type:Number,
		default:0
	}
});

module.exports={
	Usuarios,
	Post
};