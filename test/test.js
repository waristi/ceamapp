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
			.put("/api/facultad/" + id)
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
			.put("/api/entidad/" + id)
			.set('Authorization', 'Bearer ' + token)
			.expect(HttpStatus.OK)
			.end(function (err, res) {
				if (err)
					return done(err);
				done();
			})
	})
})


//PROGRAMA
describe('Programa', function () {

	var id = "";

	it('POST / Programa', function (done) {
		request(app)
			.post("/api/programa")
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

})

