var HttpStatus = require('http-status-codes'); var express =
require('express'); var router = express.Router();

var mongoose = require('mongoose');
var Entidad = mongoose.model('Entidad');

var middleware = require('../middleware');

//OBTENER Entidad
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	Entidad.find(function(err, items){
		if(err){error(err)}
		res.status(HttpStatus.OK).send(items);
	})
})

//GUARDAR Entidad
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var entidad = new Entidad(req.body);

	entidad.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "Entidad creada correctamente", id: item._id});
	}) 
})

//EDITAR Entidad
router.put('/:idEntidad', middleware.ensureAuthenticated, function(req, res){

	Entidad.findById(req.params.idEntidad, function(err, item){
			
	    item.nombre   	= req.body.nombre;
	    item.telefono   = req.body.telefono;
	    item.direccion  = req.body.direccion;
	    item.correo   	= req.body.correo;

		item.save(function(err){
			if(err){res.send(err)}
			res.status(HttpStatus.OK).send({message: "Se actualizo Entidad correctamente"});
		})
	})
})

//ELIMINAR Entidad
router.delete('/:idEntidad', middleware.ensureAuthenticated, function(req, res, next){

	Entidad.findByIdAndRemove(req.params.idEntidad, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "Entidad se elimino correctamente."});
	})
})


module.exports = router;

