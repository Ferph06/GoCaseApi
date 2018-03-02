'use strict';
class ResponseUtil{
	constructor(res,msg){
		this.res=res;
		this.msg=msg;
	}
	ok(data){
		return this.res.status(200).send({
			msg:this.msg,
			data:data
		});
	}
	error(err){
		return this.res.status(500).send({
			msg:this.msg,
			data:err
		});
	}
	invalido(){
		return this.res.status(400).send({
			msg:this.msg,
			data:{}
		});
	}
	autorizado(){
		return this.res.status(401).send({
			msg:this.msg,
			data:{}
		});
	}
	creado(){
		return this.res.status(201).send({
			msg:this.msg,
			data:{}
		});
	}

}
const Response=new ResponseUtil(null,'');
module.exports=Response;