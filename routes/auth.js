var HttpStatus = require('http-status-codes');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

var service = require('../service');


//CREA EL USUARIO ADMINISTRADOR
router.get('/', function(req, res, next){

	Usuario.findOne({'username':'admin'}, function(err, item){
		if(err){return next(err)}

		if (item) {
			res.status(HttpStatus.BAD_REQUEST).send({error: "No tiene permisos para acceder a este recurso"});

		}else{
			var usuario = new Usuario({
				username: 'admin',
				password: 'admin'
			})

			usuario.save(function(err, item){
				if(err){return next(err)}

				res.status(HttpStatus.CREATED).send({message: "Administrador creado correctamente."});
			}) 
		}
	})
})


//CREA EL USUARIO ADMINISTRADOR
router.get('/ci', function(req, res, next){

	Usuario.findOne({'username':'adminci'}, function(err, item){
		if(err){return next(err)}

		if (item) {
			res.status(HttpStatus.BAD_REQUEST).send({error: "No tiene permisos para acceder a este recurso"});

		}else{
			var usuario = new Usuario({
				username: 'adminci',
				password: 'adminci'
			})

			usuario.save(function(err, item){
				if(err){return next(err)}

				res.status(HttpStatus.CREATED).send({message: "Administrador creado correctamente."});
			}) 
		}
	})
})

//AUTENTICAR ADMINISTRADOR
router.post('/', function(req, res, next){
	var username = req.body.us;
	var password = req.body.pw;

	Usuario.findOne({'username':username}, function(err, item){
		if(err){return next(err)}

		var data = {};

		if (!item) {
			data["error"] = "Usuario no valido.";
			res.status(HttpStatus.BAD_REQUEST).send(data);
		}else{

			if(item.password != password){
				data["error"] = "Contraseña no valida.";
				res.status(HttpStatus.BAD_REQUEST).send(data);
			}else{
				data["success"] = true;
				data["token"] = service.createToken(item);
				res.status(HttpStatus.OK).send(data);
			}

		}	
		
	});

})

module.exports = router;