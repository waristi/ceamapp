var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
 
var ProgramaSchema = new mongoose.Schema({
	nombre: String,
	facultad: { type: Schema.ObjectId, ref: 'Facultad' }
});

mongoose.model('Programa', ProgramaSchema);