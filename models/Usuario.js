var mongoose = require('mongoose');
 
var UsuarioSchema = new mongoose.Schema({
	username: String,
	password: String
});

mongoose.model('Usuario', UsuarioSchema);