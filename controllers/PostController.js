'use strict';
const bluebird=require('bluebird');
const Post=require('../models/Post');
const Response=require('../util/ResponseUtil');
bluebird.promisifyAll(Post);


module.exports={
	getAll:function(req,res){
		Response.msg=''
		Response.res=res;
		Post.find({borrado:false}).then(posts=>{
				Response.ok(posts);
			}).catch(err=>{
			Response.error(err);
		});
	},
	create:function(req,res){
		Response.msg=''
		Response.res=res;
		let data=req.params;
		if(data.titulo==undefined || data.contenido==undefined){
			Response.msg='Hace falta el titulo o el contenido de la publicacion';
			Response.invalido();
		}
		Post.create(data).then(ok=>{
			Response.msg='Publicacion  creada';
			Response.creado();
		}).catch(err=>{
			Response.error(err);
		})
	}

}