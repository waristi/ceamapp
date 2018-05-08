var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
 
var ProyectoSchema = new mongoose.Schema({
	titulo: String,
	descripcion: String,
	duracion: String,
	grupoInvestigacion: { type: Schema.ObjectId, ref: 'GrupoInvestigacion' }
});

mongoose.model('Proyecto', ProyectoSchema);