'use strict';
const ObjectId = require('mongoose').Types.ObjectId;
class Validaciones{
	constructor(){}
	idValidation(id){
		
		return Regexp.test(id);
	}
}
const Validacion=new Validaciones();
module.exports=Validacion;