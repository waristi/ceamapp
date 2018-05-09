var HttpStatus = require('http-status-codes');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Investigador = mongoose.model('Investigador');

var middleware = require('../middleware');

//OBTENER INVESTIGADOR
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	Investigador.find()
    .populate('grupoInvestigacion')
    .exec(function(err, items) {
      if(err){return next(err)}
      res.status(HttpStatus.OK).send(items);
    });  
})

//GUARDAR INVESTIGADOR
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var investigador = new Investigador(req.body);

	investigador.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "Investigador creada correctamente"});
	}) 
})

//EDITAR PROYECTO
router.put('/:idInvestigador', middleware.ensureAuthenticated, function(req, res){

	Investigador.findById(req.params.idInvestigador, function(err, item){

		var fNacimiento = new Date(req.body.fechaNacimiento);
		var fVinculacion = new Date(req.body.vinculacion);
			
	    item.documento   = req.body.documento;
	    item.nombre   = req.body.nombre;
	    item.apellido   = req.body.apellido;
	    item.correo   = req.body.correo;
	    item.vinculacion   = fVinculacion;
	    item.horas   = req.body.horas;
	    item.fechaNacimiento   = fNacimiento;
	    item.grupoInvestigacion   = mongoose.mongo.ObjectId(req.body.grupoInvestigacion);

		item.save(function(err){
			if(err){res.send(err)}
			res.status(HttpStatus.OK).send({message: "Se actualizo Proyecto correctamente"});
		})
	})
})

//ELIMINAR PROYECTO
router.delete('/:idInvestigador', middleware.ensureAuthenticated, function(req, res, next){

	Investigador.findByIdAndRemove(req.params.idInvestigador, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "Proyecto se elimino correctamente."});
	})
})


module.exports = router;

