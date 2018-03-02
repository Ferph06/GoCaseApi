'use strict';
const mongoose=require('mongoose');
const configDB=require('./configDB');

module.exports={
	crearConexion:function(){
		mongoose.connect(configDB.db,configDB.options).then(ok=>{
			console.log(`conexion exitosa `);
		}).catch(err=>{
			console.error(`UUPS ha sucedido un fallo en la conexion a la base de datos ${err}`);
		});
	},
	cerrarConexion:function(){
		mongoose.connection.close().then(ok=>{
			console.log('Se cerro exitosamente');
		}).catch(err=>{
			console.error('error al cerrar la conexion')
		})
	},
	inciarConexion:function(){
		this.crearConexion();
		var db=mongoose.connection;
		db.on("error",console.error.bind(console, "Error en la conexion"));
		db.once("open", function(ok) {
			console.log("OK");
		});
	}
}