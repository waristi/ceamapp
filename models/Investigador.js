var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
 
var InvestigadorSchema = new mongoose.Schema({
	documento: String,
	nombre: String,
	apellido: String,
	correo: String,
	vinculacion: Date,
	horas: Number,
	fechaNacimiento: Date,
	grupoInvestigacion: { type: Schema.ObjectId, ref: 'GrupoInvestigacion' }
});

mongoose.model('Investigador', InvestigadorSchema);