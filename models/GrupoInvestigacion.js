var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
 
var GrupoInvestigacionSchema = new mongoose.Schema({
	nombre: String,
	categoria: String,
	fechaCreacion: Date,
	programa: { type: Schema.ObjectId, ref: 'Programa' }
});

mongoose.model('GrupoInvestigacion', GrupoInvestigacionSchema);