angular.module('appWeb', ['ui.router', 'appWeb.controllers', 'appWeb.services', 'appWeb.constants'])

.run(function(){

	
})
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller:  'LoginCtrl'
	})

	.state('menu', {
		url: '',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller:  'AppCtrl'
	})

	.state('menu.dashboard', {
		url: '/dashboard',
		views: {
			'tab-home': {
				templateUrl: 'templates/dashboard.html',
				controller:  'DashboardCtrl'
			}
		}
	})	

	.state('menu.facultad', {
		url: '/facultad',
		views: {
			'tab-home': {
				templateUrl: 'templates/facultad.html',
				controller: 'FacultadCtrl'
			}
		}
	})	

	.state('menu.programa', {
		url: '/programa',
		views: {
			'tab-home': {
				templateUrl: 'templates/programa.html',
				controller: 'ProgramaCtrl'
			}
		}
	})	

	.state('menu.grupo', {
		url: '/grupo',
		views: {
			'tab-home': {
				templateUrl: 'templates/grupo.html',
				controller: 'GrupoCtrl'
			}
		}
	})	

	.state('menu.investigador', {
		url: '/investigador',
		views: {
			'tab-home': {
				templateUrl: 'templates/investigador.html',
				controller: 'InvestigadorCtrl'
			}
		}
	})	

	.state('menu.proyecto', {
		url: '/proyecto',
		views: {
			'tab-home': {
				templateUrl: 'templates/proyecto.html',
				controller: 'ProyectoCtrl'
			}
		}
	})	

	.state('menu.entidad', {
		url: '/entidad',
		views: {
			'tab-home': {
				templateUrl: 'templates/entidad.html',
				controller: 'EntidadCtrl'
			}
		}
	})	

	.state('menu.estacion', {
		url: '/estacion',
		views: {
			'tab-home': {
				templateUrl: 'templates/estacion.html',
				controller: 'EstacionCtrl'
			}
		}
	})	

	.state('menu.datosEstacion', {
		url: '/datosEstacion',
		views: {
			'tab-home': {
				templateUrl: 'templates/datosEstacion.html',
				controller: 'DatosEstacionCtrl'
			}
		}
	})	

	$urlRouterProvider.otherwise('/login');


})

.directive('dateFormat', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, ngModelCtrl) {
      //Angular 1.3 insert a formater that force to set model to date object, otherwise throw exception.
      //Reset default angular formatters/parsers
      ngModelCtrl.$formatters.length = 0;
      ngModelCtrl.$parsers.length = 0;
    }
  };
});