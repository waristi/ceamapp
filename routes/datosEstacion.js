var HttpStatus = require('http-status-codes'); var express =
require('express'); var router = express.Router();

var mongoose = require('mongoose');
var DatosEstacion = mongoose.model('DatosEstacion');

var middleware = require('../middleware');

//OBTENER DatosEstacion
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	DatosEstacion.find(function(err, items){
		if(err){error(err)}
		res.status(HttpStatus.OK).send(items);
	})
})

//GUARDAR DatosEstacion
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var datosEstacion = new DatosEstacion(req.body);
	datosEstacion.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "DatosEstacion creada correctamente", id: item._id});
	}) 
})

//EDITAR Estacion
router.put('/:idEstacion', middleware.ensureAuthenticated, function(req, res){

	DatosEstacion.findById(req.params.idEstacion, function(err, item){
			
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
 

//ELIMINAR DatosEstacion
router.delete('/:idEstacion', middleware.ensureAuthenticated, function(req, res, next){

	DatosEstacion.findByIdAndRemove(req.params.idEstacion, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "DatosEstacion se elimino correctamente."});
	})
})


module.exports = router;

