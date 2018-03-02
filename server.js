'use strict';
const express=require('express');

const server=express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const port=process.env.PORT || 6060;
const router=require('./config/Router');

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());

server.use(morgan("dev"));

server.use(router.api);

server.get('/',(req,res)=>{
	res.send("GoCaseApi");
});

server.listen(port);