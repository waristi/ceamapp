var mongoose = require('mongoose');
 
var SalidaInvestigadorSchema = new mongoose.Schema({
	salidaCampo: { type: Schema.ObjectId, ref: 'SalidaCampo' },
	investigador: { type: Schema.ObjectId, ref: 'SalidaCampo' }
});

mongoose.model('Investigador', SalidaInvestigadorSchema);