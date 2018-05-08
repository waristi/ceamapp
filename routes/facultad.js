var HttpStatus = require('http-status-codes'); var express =
require('express'); var router = express.Router();

var mongoose = require('mongoose');
var Facultad = mongoose.model('Facultad');

var middleware = require('../middleware');

//OBTENER FACULTAD
router.get('/', middleware.ensureAuthenticated, function(req, res, next){

	Facultad.find(function(err, items){
		if(err){error(err)}
		res.status(HttpStatus.OK).send(items);
	})
})

//GUARDAR FACULTAD
router.post('/', middleware.ensureAuthenticated, function(req, res, next){

	var facultad = new Facultad(req.body);

	facultad.save(function(err, item){
		if(err){return next(err)}	
		res.status(HttpStatus.CREATED).send({message: "Facultad creada correctamente", id: item._id});
	}) 
})

//EDITAR FACULTAD
router.put('/:idFacultad', middleware.ensureAuthenticated, function(req, res){

	Facultad.findById(req.params.idFacultad, function(err, item){
			
	    item.nombre   = req.body.nombre;

		item.save(function(err){
			if(err){res.send(err)}
			res.status(HttpStatus.OK).send({message: "Se actualizo Facultad correctamente"});
		})
	})
})

//ELIMINAR FACULTAD
router.delete('/:idFacultad', middleware.ensureAuthenticated, function(req, res, next){

	Facultad.findByIdAndRemove(req.params.idFacultad, function(err){
		if(err){res.send(err)}
		res.status(HttpStatus.OK).send({message: "Facultad se elimino correctamente."});
	})
})


module.exports = router;

