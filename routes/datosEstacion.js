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

	var cantidad = req.body.cantidad;

	for(var i=0; i<cantidad; i++){
		var data = new DatosEstacion({
			fecha: new Date(),
			temperatura: 0,
			tempAlta: 0,
			tempBaja: 0,
			humedad: 0,
			puntoRocio: 0,
			velocidadViento: 0,
			direccionViento: 0,
			vientoCorriente: 0,
			altaVelocidadViento: 0,
			altaDireccionViento: 0,
			vientoFrio: 0,
			indiceCalor: 0,
			thw: 0,
			thsw: 0,
			barometro: 0,
			lluvia: 0,
			tasalluvia: 0,
			radSolar: 0,
			energiaSolar: 0,
			radSolarAlta: 0,
			etIn: 0,
			eiIndiceuv: 0,
			diasGradoCalentamiento: 0,
			diasGradoEnfriamiento: 0,
			estacion: 0
		})

		entidad.save(function(err, item){
			if(err){return next(err)}	
		}) 
	}

	res.status(HttpStatus.CREATED).send({message: "Entidad creada correctamente"});

	/*var cantidadRegistros = new DatosEstacion(req.body);
 	var dato = new DatosEstacion
 		({
 			 	temperatura : 72,

 		});
    	dato.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "DatosEstacion creada correctamente", id: item._id});
	})*/
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

