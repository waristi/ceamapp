var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

//**************LLAMAMOS EL MODELO*****************
require('./models/Usuario');
require('./models/Facultad');
require('./models/Programa');
require('./models/GrupoInvestigacion');
require('./models/Investigador');
require('./models/Proyecto');

//CONEXION A BASE DE DATOS
mongoose.connect('mongodb://localhost/ceamdb');


var index = require('./routes/index');
var auth = require('./routes/auth');
var usuarios = require('./routes/usuarios');
var facultad = require('./routes/facultad');
var programa = require('./routes/programa');
var grupoInvestigacion = require('./routes/grupoInvestigacion');
var investigador = require('./routes/investigador');
var proyecto = require('./routes/proyecto');



var app = express();
app.use(cors());

// view engine setup
app.set('client', path.join(__dirname, 'client'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);
app.use('/api/auth', auth);
app.use('/api/usuarios', usuarios);
app.use('/api/facultad', facultad);
app.use('/api/programa', programa);
app.use('/api/grupo', grupoInvestigacion);
app.use('/api/investigador', investigador);
app.use('/api/proyecto', proyecto);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
