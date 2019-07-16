var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var tareasSchema = new Schema({
	'titulo' : String,
	'descripcion' : String
});

module.exports = mongoose.model('tareas', tareasSchema);
