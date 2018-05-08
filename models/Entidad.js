var mongoose = require('mongoose');
 
var EntidadSchema = new mongoose.Schema({
	nombre: String,
	telefono: String,
	direccion: String,
	correo: String
});

mongoose.model('Entidad', EntidadSchema);