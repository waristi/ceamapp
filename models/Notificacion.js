var mongoose = require('mongoose');
 
var NotificacionSchema = new mongoose.Schema({
	fecha: Date,
	titulo: String,
	descripcion: String,
	datosEstacion: { type: Schema.ObjectId, ref: 'DatosEstacion' },
	entidad: { type: Schema.ObjectId, ref: 'Entidad' }
});

mongoose.model('Notificacion', NotificacionSchema);