var HttpStatus = require('http-status-codes');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var GrupoInvestigacion = mongoose.model('GrupoInvestigacion');

var middleware = require('../middleware');

//OBTENER GRUPO
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	GrupoInvestigacion.find()
    .populate('programa')
    .exec(function(err, items) {
      if(err){return next(err)}
      res.status(HttpStatus.OK).send(items);
    });  
})

//GUARDAR GRUPO
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var grupoInvestigacion = new GrupoInvestigacion(req.body);

	grupoInvestigacion.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "Grupo creado correctamente"});
	}) 
})

//EDITAR GRUPO
router.put('/:idGrupo', middleware.ensureAuthenticated, function(req, res){

	GrupoInvestigacion.findById(req.params.idGrupo, function(err, item){
		console.log(item);
   	    item.nombre   		= req.body.nombre;
	    item.categoria   	= req.body.categoria;
	    item.fechaCreacion  = req.body.fechaCreacion;
	    item.programa   	= mongoose.mongo.ObjectId(req.body.programa);

		item.save(function(err){
			if(err){res.send(err)}
			res.status(HttpStatus.OK).send({message: "Se actualizo Grupo correctamente"});
		})
	})
})

//ELIMINAR GRUPO
router.delete('/:idGrupo', middleware.ensureAuthenticated, function(req, res, next){

	GrupoInvestigacion.findByIdAndRemove(req.params.idGrupo, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "Grupo se elimino correctamente."});
	})
})


module.exports = router;

