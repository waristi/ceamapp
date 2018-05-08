var mongoose = require('mongoose');
 
var DatosSalidaCampoSchema = new mongoose.Schema({
	cantMuestra: Number,
	cantVectores: Number, 
	salidaCampo: { type: Schema.ObjectId, ref: 'SalidaCampo' }
});

mongoose.model('DatosSalidaCampo', DatosSalidaCampoSchema);