var HttpStatus = require('http-status-codes'); var express =
require('express'); var router = express.Router();

var mongoose = require('mongoose');
var DatosEstacion = mongoose.model('DatosEstacion');
var Entidad = mongoose.model('Entidad');

//MOTOR DE REGLAS
var RuleEngine = require('node-rules');
var nodemailer = require('nodemailer');


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


 	var cantidad = parseInt(req.body.cantidad);

 	//REGLA DE NEGOCIO
 	var rules = [{
	    "condition": function(R) {
	        R.when((this.tempAlta > 500) && (this.temperatura < 500));
	    },
	    "consequence": function(R) {
	        this.result = true;
	        R.stop();
	    }
	}];
 


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

		data.save(function(err, item){
			if(err){return next(err)}	

			var R = new RuleEngine(rules);

			R.execute(data, function(result){ 
			    if(result.result){
			        console.log("Genero Alerta"); 

			        Entidad.find(function(err, items){
						if(err){error(err)}

						for(var i=0; i<items.length; i++){
							var transporter = nodemailer.createTransport({
							  service: 'gmail',
							  auth: {
							    user: 'bazuluagaa@uqvirtual.edu.co',
							    pass: '1094938559'
							  }
							});

							var mailOptions = {
							  from: 'ceam@gmail.com',
							  to: items[i].correo,
							  subject: 'Urgente Alerta Estación (CEAM) ' + new Date(),
							  text: 'Alerta Detectada \n El centro de estudios de alta montaña detecto una alerta en la estación con codigo 001, por favor tomar las precauciones necesarias. ¡Gracias!'
							};

							transporter.sendMail(mailOptions, function(error, info){
							  if (error) {
							    console.log(error);
							  } else {
							    console.log('Email sent: ' + info.response);
							  }
							});
						}

					})

			    }else 
			        console.log("No genero alerta");
			    
			});
			
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

