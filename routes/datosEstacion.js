var HttpStatus = require('http-status-codes'); var express =
require('express'); var router = express.Router();

var mongoose = require('mongoose');
var DatosEstacion = mongoose.model('DatosEstacion');

var middleware = require('../middleware');

//OBTENER DatosEstacion
router.get('/', function(req, res, next){

	DatosEstacion.find(function(err, items){
		if(err){error(err)}
		res.status(HttpStatus.OK).send(items);
	})
})

//GUARDAR DatosEstacion
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

 	//var cantidad = 2;
 	var cantidad = parseInt(req.body.cantidad);
 	console.log(cantidad);

	for(var i=0; i<cantidad; i++)
	{
		var data = new DatosEstacion({
			fecha: new Date(),
			temperatura:Math.random() * (100 - 1) + 1,
			tempAlta: Math.random() * (100 - 1) + 1,
			tempBaja: Math.random() * (100 - 1) + 1,
			humedad: Math.random() * (100 - 1) + 1,
			puntoRocio: Math.random() * (100 - 1) + 1,
			velocidadViento: Math.random() * (100 - 1) + 1,
			direccionViento: Math.random() * (100 - 1) + 1,
			vientoCorriente: Math.random() * (100 - 1) + 1,
			altaVelocidadViento: Math.random() * (100 - 1) + 1,
			altaDireccionViento: Math.random() * (100 - 1) + 1,
			vientoFrio: Math.random() * (100 - 1) + 1,
			indiceCalor: Math.random() * (100 - 1) + 1,
			thw: Math.random() * (100 - 1) + 1,
			thsw: Math.random() * (100 - 1) + 1,
			barometro: Math.random() * (100 - 1) + 1,
			lluvia: Math.random() * (100 - 1) + 1,
			tasalluvia: Math.random() * (100 - 1) + 1,
			radSolar: Math.random() * (100 - 1) + 1,
			energiaSolar: Math.random() * (100 - 1) + 1,
			radSolarAlta: Math.random() * (100 - 1) + 1,
			etIn: Math.random() * (100 - 1) + 1,
			eiIndiceuv: Math.random() * (100 - 1) + 1,
			diasGradoCalentamiento: Math.random() * (100 - 1) + 1,
			diasGradoEnfriamiento: Math.random() * (100 - 1) + 1
		});

		console.log(data);

		data.save(function(err, item){
			if(err){return next(err)}	
		}) 
	}

	res.status(HttpStatus.CREATED).send({message: "Entidad creada correctamente"});
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

