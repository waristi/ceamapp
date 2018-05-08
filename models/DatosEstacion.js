var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var DatosEstacionSchema = new mongoose.Schema({
	fecha: Date,
	temperatura: Number,
	tempAlta: Number,
	tempBaja: Number,
	humedad: Number,
	puntoRocio: Number,
	velocidadViento: Number,
	direccionViento: Number,
	vientoCorriente: Number,
	altaVelocidadViento: Number,
	altaDireccionViento: Number,
	vientoFrio: Number,
	indiceCalor: Number,
	thw: Number,
	thsw: Number,
	barometro: Number,
	lluvia: Number,
	tasalluvia: Number,
	radSolar: Number,
	energiaSolar: Number,
	radSolarAlta: Number,
	etIn: Number,
	eiIndiceuv: Number,
	diasGradoCalentamiento: Number,
	diasGradoEnfriamiento: Number,
	estacion: { type: Schema.ObjectId, ref: 'Estacion' }
});

mongoose.model('DatosEstacion', DatosEstacionSchema);