var HttpStatus = require('http-status-codes');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Programa = mongoose.model('Programa');

var middleware = require('../middleware');

//OBTENER PROGRAMA
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	Programa.find()
    .populate('facultad')
    .exec(function(err, items) {
      if(err){return next(err)}
      res.status(HttpStatus.OK).send(items);
    });  
})

//GUARDAR PROGRAMA
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var programa = new Programa(req.body);

	programa.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "Programa creada correctamente", id: item._id});
	}) 
})

//EDITAR PROGRAMA
router.put('/:idPrograma', middleware.ensureAuthenticated, function(req, res){

	Programa.findById(req.params.idPrograma, function(err, item){
			
	    item.nombre   = req.body.nombre;
	    item.facultad   = mongoose.mongo.ObjectId(req.body.facultad);

		item.save(function(err){
			if(err){res.send(err)}
			res.status(HttpStatus.OK).send({message: "Se actualizo Programa correctamente"});
		})
	})
})

//ELIMINAR PROGRAMA
router.delete('/:idPrograma', middleware.ensureAuthenticated, function(req, res, next){

	Programa.findByIdAndRemove(req.params.idPrograma, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "Programa se elimino correctamente."});
	})
})


module.exports = router;

