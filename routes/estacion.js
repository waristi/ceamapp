var HttpStatus = require('http-status-codes'); var express =
require('express'); var router = express.Router();

var mongoose = require('mongoose');
var Estacion = mongoose.model('Estacion');

var middleware = require('../middleware');

//OBTENER Estacion
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	Estacion.find(function(err, items){
		if(err){error(err)}
		res.status(HttpStatus.OK).send(items);
	})
})

//GUARDAR Estacion
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var entidad = new Estacion(req.body);

	entidad.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "Estacion creada correctamente", id: item._id});
	}) 
})

//EDITAR Estacion
router.put('/:idEntidad', middleware.ensureAuthenticated, function(req, res){

	Estacion.findById(req.params.idEntidad, function(err, item){
			
	    item.marca   	= req.body.marca;
	    item.ubicacion   = req.body.ubicacion;
	    item.latitud    = req.body.latitud;
	    item.longitud   = req.body.longitud;

		item.save(function(err){
			if(err){res.send(err)}
			res.status(HttpStatus.OK).send({message: "Se actualizo Estacion correctamente"});
		})
	})
})

//ELIMINAR Estacion
router.delete('/:idEntidad', middleware.ensureAuthenticated, function(req, res, next){

	Estacion.findByIdAndRemove(req.params.idEntidad, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "Estacion se elimino correctamente."});
	})
})


module.exports = router;

