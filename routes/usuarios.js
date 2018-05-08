var HttpStatus = require('http-status-codes');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuarios = mongoose.model('Usuario');

var middleware = require('../middleware');
var service = require('../service');


//MOSTRAR TODOS LOS USUARIOS
router.get('/', middleware.ensureAuthenticated, function(req, res, next){
 
	Usuarios.find(function(err, item){
		if(err){return next(err)}

		res.status(HttpStatus.OK).send(item);
	})
})

module.exports = router;