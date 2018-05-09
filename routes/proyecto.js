var HttpStatus = require('http-status-codes');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Proyecto = mongoose.model('Proyecto');

var middleware = require('../middleware');

//OBTENER PROYECTO
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	Proyecto.find()
    .populate('grupoInvestigacion')
    .exec(function(err, items) {
      if(err){return next(err)}
      res.status(HttpStatus.OK).send(items);
    });  
})

//GUARDAR PROYECTO
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var proyecto = new Proyecto(req.body);

	proyecto.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "Proyecto creada correctamente", id: item._id});
	}) 
})

//EDITAR PROYECTO
router.put('/:idProyecto', middleware.ensureAuthenticated, function(req, res){

	Proyecto.findById(req.params.idProyecto, function(err, item){
			
	    item.titulo   = req.body.titulo;
	    item.descripcion   = req.body.descripcion;
	    item.duracion   = req.body.duracion;
	    item.grupoInvestigacion   = mongoose.mongo.ObjectId(req.body.grupoInvestigacion);

		item.save(function(err){
			if(err){res.send(err)}
			res.status(HttpStatus.OK).send({message: "Se actualizo Proyecto correctamente"});
		})
	})
})

//ELIMINAR PROYECTO
router.delete('/:idProyecto', middleware.ensureAuthenticated, function(req, res, next){

	Proyecto.findByIdAndRemove(req.params.idProyecto, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "Proyecto se elimino correctamente."});
	})
})


module.exports = router;

