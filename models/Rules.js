var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
 
var RulesSchema = new mongoose.Schema({
	rules: Schema.Types.Mixed,
	entidades: []
});

mongoose.model('Rules', RulesSchema);