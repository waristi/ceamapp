var app = require('../app');
var request = require('supertest');
var HttpStatus = require('http-status-codes');



var token = "";


//LOGIN USUARIO
describe('Autenticación', function () {

	it('Crear Usuario', function (done) {
		request(app)
			.get("/api/auth/ci")
			.end(function (err, res) {
				if (err)
					done("usuario ya creado");
				else
					done();
			})
	})

	it('Test Login', function (done) {
		request(app)
			.post("/api/auth")
			.send({ us: 'adminci', pw: 'adminci' })
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);

				token = res.body.token;
				done();
			})
	})
})


//USUARIOS
describe('Usuarios', function () {
	it('GET / Usuario', function (done) {
		request(app)
			.get("/api/usuarios")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);

				done();
			})
	})
})


//FACULTAD 
describe('Facultad', function () {

	var id = "";

	it('POST / Factultad', function (done) {
		request(app)
			.post("/api/facultad")
			.send({ nombre: 'Prueba Mocha' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body.id;
				done();
			})
	})


	it('GET / Factultad', function (done) {
		request(app)
			.get("/api/facultad")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})


	it('PUT / Factultad', function (done) {
		request(app)
			.put("/api/facultad/" + id)
			.send({ nombre: 'Prueba Mocha Edit' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	it('DELETE / Factultad', function (done) {
		request(app)
			.delete("/api/facultad/" + id)
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})
})

//ENTIDAD 
describe('Entidad', function () {

	var id = "";

	it('POST / Entidad', function (done) {
		request(app)
			.post("/api/entidad")
			.send({ nombre: 'Prueba Mocha' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body.id;
				done();
			})
	})


	it('GET / Entidad', function (done) {
		request(app)
			.get("/api/entidad")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})


	it('PUT / Entidad', function (done) {
		request(app)
			.put("/api/entidad/" + id)
			.send({ nombre: 'Prueba Mocha Edit' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	it('DELETE / Entidad', function (done) {
		request(app)
			.delete("/api/entidad/" + id)
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})
})


//ESTACIÓN
describe('Estacion', function () {

	var id = "";

	it('POST / Estacion', function (done) {
		request(app)
			.post("/api/estacion")
			.send({ nombre: 'Prueba Mocha' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body.id;
				done();
			})
	})


	it('GET / Estacion', function (done) {
		request(app)
			.get("/api/estacion")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})


	it('PUT / Estacion', function (done) {
		request(app)
			.put("/api/estacion/" + id)
			.send({ nombre: 'Prueba Mocha Edit' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	it('DELETE / Estacion', function (done) {
		request(app)
			.delete("/api/estacion/" + id)
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})
})

//DATOS ESTACIÓN
describe('DatosEstacion', function () {

	var id = "";

	it('POST / DatosEstacion', function (done) {
		request(app)
			.post("/api/datosEstacion")
			.send({ cantidad: 1 })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body.id;
				console.log("acá "+id)
				done();
			})
	})


	it('GET / DatosEstacion', function (done) {
		request(app)
			.get("/api/datosEstacion")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})
 

	// it('DELETE / DatosEstacion', function (done) {
	// 	request(app)
	// 		.delete("/api/DatosEstacion/" + id)
	// 		.set('Authorization', 'Bearer ' + token)
	// 		.expect(HttpStatus.OK)
	// 		.end(function (err, res) {
	// 			if (err)
	// 				return done(err);
	// 			done();
	// 		})
	// })


})


//PROGRAMA
describe('Programa', function () {

	var id = "";

	it('POST / Programa', function (done) {
		request(app)
			.post("/api/programa")
			.send({ nombre: 'Programa' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body.id;
				done();
			})
	})


	it('GET / Programa', function (done) {
		request(app)
			.get("/api/programa")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	it('PUT / Programa', function (done) {
		request(app)
			.put("/api/programa/" + id)
			.send({ nombre: 'Prueba Mocha Edit' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	it('DELETE / Programa', function (done) {
		request(app)
			.delete("/api/programa/" + id)
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

})



//PROYECTO
describe('Proyecto', function () {

	var id = "";

	it('POST / Proyecto', function (done) {
		request(app)
			.post("/api/proyecto")
			.send({ titulo: 'Proyecto' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body._id;
				done();
			})
	})


	it('GET / Proyecto', function (done) {
		request(app)
			.get("/api/proyecto")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	// it('PUT / Proyecto', function (done) {
	// 	request(app)
	// 		.put("/api/proyecto/" + id)
	// 		.send({ titulo: 'Prueba Mocha Edit' })
	// 		.set('Authorization', 'Bearer ' + token)
	// 		.expect(HttpStatus.OK)
	// 		.end(function (err, res) {
	// 			if (err)
	// 				return done(err);
	// 			done();
	// 		})
	// })

	// it('DELETE / Proyecto', function (done) {
	// 	request(app)
	// 		.delete("/api/proyecto/" + id)
	// 		.set('Authorization', 'Bearer ' + token)
	// 		.expect(HttpStatus.OK)
	// 		.end(function (err, res) {
	// 			if (err)
	// 				return done(err);
	// 			done();
	// 		})
	// })

})


//INVESTIGADOR
describe('Investigador', function () {

	var id = "";

	it('POST / Investigador', function (done) {
		request(app)
			.post("/api/investigador")
			.send({ nombre: 'Investigador' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body._id;
				done();
			})
	})


	it('GET / Investigador', function (done) {
		request(app)
			.get("/api/investigador")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	// it('PUT / Investigador', function (done) {
	// 	request(app)
	// 		.put("/api/investigador/" + id)
	// 		.send({ nombre: 'Prueba Mocha Edit' })
	// 		.set('Authorization', 'Bearer ' + token)
	// 		.expect(HttpStatus.OK)
	// 		.end(function (err, res) {
	// 			if (err)
	// 				return done(err);
	// 			done();
	// 		})
	// })

	// it('DELETE / Investigador', function (done) {
	// 	request(app)
	// 		.delete("/api/investigador/" + id)
	// 		.set('Authorization', 'Bearer ' + token)
	// 		.expect(HttpStatus.OK)
	// 		.end(function (err, res) {
	// 			if (err)
	// 				return done(err);
	// 			done();
	// 		})
	// })

})



//GRUPOS DE INVESTIGACION
describe('GrupoInvestigacion', function () {

	var id = "";

	it('POST / GrupoInvestigacion', function (done) {
		request(app)
			.post("/api/grupo")
			.send({ nombre: 'Grupo' })
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.CREATED)
			.end(function (err, res) {
				if (err)
					return done(err);
				id = res.body.id;
				done();
			})
	})


	it('GET / GrupoInvestigacion', function (done) {
		request(app)
			.get("/api/grupo")
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})

	// it('PUT / GrupoInvestigacion', function (done) {
	// 	request(app)
	// 		.put("/api/grupo/" + id)
	// 		.send({ nombre: 'Prueba Mocha Edit' })
	// 		.set('Authorization', 'Bearer ' + token)
	// 		.expect(HttpStatus.OK)
	// 		.end(function (err, res) {
	// 			if (err)
	// 				return done(err);
	// 			done();
	// 		})
	// })

	// it('DELETE / GrupoInvestigacion', function (done) {
	// 	request(app)
	// 		.delete("/api/grupo/" + id)
	// 		.set('Authorization', 'Bearer ' + token)
	// 		.expect(HttpStatus.OK)
	// 		.end(function (err, res) {
	// 			if (err)
	// 				return done(err);
	// 			done();
	// 		})
	// })

})
