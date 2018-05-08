var mongoose = require('mongoose');
 
var FacultadSchema = new mongoose.Schema({
	nombre: String
});

mongoose.model('Facultad', FacultadSchema);