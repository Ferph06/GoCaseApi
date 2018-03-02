'use strict';
const bluebird=require('bluebird');
const Usuario=require('../models/Usuario').Usuario;
const Response=require('../util/ResponseUtil');
const Validacion=require('../util/Validacion');
bluebird.promisifyAll(Usuario);

module.exports={
	getAll:function(req,res){
		Response.msg=''
		Response.res=res;
		Usuario.find({borrado:false}).then(usuarios=>{
			Response.ok(usuarios);
		}).catch(err=>{
			Response.msg='Error en obtener usuarios'
			Response.error(err);
		});
	},
	create:function(req,res){
		let data=req.body;
		Response.res=res;
		if(data.email===undefined || data.claveUsuario===undefined) {
			Response.msg='payload invalido'
			Response.invalido();
		}

		Usuario.findOne({email:data.email,borrado:false}).then(result=>{
			if(result==undefined){
				Usuario.create(data).then(ok=>{
					Response.msg='Usuario creado'
						Response.creado();
					}).catch(err=>{
						Response.msg='Error en crear'
						Response.error(err);
				});
			}else{
				Response.msg='el usuario ya existe'
				Response.ok(undefined);
			}
		}).catch(err=>{
			Response.msg='Error en buscar usuarios crear'
			Response.error(err);
		})
	},
	findById:function(req,res){
		let id=req.params.id;
		Response.msg=''
		Response.res=res;
		if(id!==undefined){
					Usuario.findOne({_id:id,borrado:false}).then(result=>{
						Response.msg='Usuario encontrado';
						Response.ok(result);
					}).catch(err=>{
						Response.msg='Error en buscar usuarios '
						Response.error(err);
				});
			}else{
				Response.msg='Hace falta el id para la consulta';
				Response.invalido();
		}
	},
	remove:function(req,res){
		let id=req.params.id;
		Response.msg='';
		Response.res=res;
		if(id!==undefined){
			Usuario.update({_id:id},{
				$set:{
					borrado:true
			}
		}).then(ok=>{
			Response.msg='Usuario borrado';
			Response.ok(id);
				}).catch(err=>{
				Response.msg='Error en buscar usuarios '
				Response.error(err);
			})
		}
	},
	delete:function(req,res){

	}
}