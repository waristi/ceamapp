var mongoose = require('mongoose');
 
var SalidaCampoSchema = new mongoose.Schema({
	descripcion: String,
	fecha: Date
});

mongoose.model('SalidaCampo', SalidaCampoSchema);