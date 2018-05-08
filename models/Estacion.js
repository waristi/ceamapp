var mongoose = require('mongoose');
 
var EstacionSchema = new mongoose.Schema({
	marca: String,
	ubicacion: String,
	latitud: Number,
	longitud: Number
});

mongoose.model('Estacion', EstacionSchema);