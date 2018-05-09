angular.module('appWeb.controllers', [])

.controller('AppCtrl', function($scope, $http, Auth){

	$scope.USER = JSON.parse(localStorage.getItem("USER"));
	if($scope.USER){
		$http.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
	    $http.defaults.headers.common['Authorization'] = 'Bearer ' + $scope.USER.token;
	    $http.defaults.headers.common['Content-Type'] = 'application/json';
	}else{
		$state.go('login');
	}
		
})

.controller('LoginCtrl', function($scope, $state, Auth, ApiService, CONFIG){

	$scope.dataUser = {};
	$scope.alert = "";

	//LOGIN DE USUARIO
	$scope.login = function(){

		var url = CONFIG.DOMAIN + CONFIG.APILOGIN;
		
		ApiService.post(url, $scope.dataUser)
		.then(function(data){
			localStorage.setItem("USER", JSON.stringify(data));
			$state.go('menu.dashboard');
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}
})

.controller('DashboardCtrl', function($scope, $state){
	
})


//CONTROLADOR ESTACIÓN
.controller('EstacionCtrl',  function($scope, $state, Auth, ApiService, CONFIG){


	$scope.dataEstacion = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIESTACION;
	
	//OBTIENE LA LISTA DE ESTACIONES
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listaEstaciones = data;
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UNA ESTACIÓN
	$scope.guardar = function(){
		var call;

		if($scope.dataEstacion._id)
			call = ApiService.put(url  + "/" + $scope.dataEstacion._id, $scope.dataEstacion);
		else
			call = ApiService.post(url, $scope.dataEstacion);
		
		call.then(function(data){
			$scope.dataEstacion = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA ESTACIÓN
	$scope.editar = function(item){
		$scope.dataEstacion= item;
	}

	//ELIMINA UNA ESTACIÓN
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getAll();
	
})

//CONTROLADOR DATOS ESTACIÓN
.controller('DatosEstacionCtrl',  function($scope, $state, Auth, ApiService, CONFIG){


	$scope.dataDatoEstacion = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIDATOSESTACION;
	
	//OBTIENE LA LISTA DE ESTACIONES
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listaDatosEstaciones = data;
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UNA ESTACIÓN
	$scope.guardar = function(){
		var call;

		if($scope.dataDatoEstacion._id)
			call = ApiService.put(url  + "/" + $scope.dataDatoEstacion._id, $scope.dataDatoEstacion);
		else
			call = ApiService.post(url, $scope.dataDatoEstacion);
		
		call.then(function(data){
			$scope.dataDatoEstacion = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA ESTACIÓN
	$scope.editar = function(item){
		$scope.dataDatoEstacion= item;
	}

	//ELIMINA UNA ESTACIÓN
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getAll();
	
})

//CONROLADOR FACULTAD
.controller('FacultadCtrl', function($scope, $state, Auth, ApiService, CONFIG){
	
	$scope.dataFacultad = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIFACULTAD;
	
	//OBTIENE LA LISTA DE FACULTAD
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listFacultad = data;
		})
		.catch(function(err){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UNA FACULTAD
	$scope.guardar = function(){
		var call;

		if($scope.dataFacultad._id)
			call = ApiService.put(url  + "/" + $scope.dataFacultad._id, $scope.dataFacultad);
		else
			call = ApiService.post(url, $scope.dataFacultad);
		
		call.then(function(data){
			$scope.dataFacultad = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA FACULTAD
	$scope.editar = function(item){
		$scope.dataFacultad = item;
	}

	//ELIMINA UNA FACULTAD
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getAll();

})

//CONTROLADOR PROGRAMA
.controller('ProgramaCtrl', function($scope, $state, Auth, ApiService, CONFIG){

	$scope.dataPrograma = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIPROGRAMA;

	//OBTIENE LA LISTA DE FACULTAD
	var getFacultad = function(){
		var urlFacultad = CONFIG.DOMAIN + CONFIG.APIFACULTAD;
		ApiService.get(urlFacultad)
		.then(function(data){
			$scope.listFacultad = data;
		})
		.catch(function(err){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}


	
	//OBTIENE LA LISTA DE PROGRAMA
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listPrograma = data;
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UNA PROGRAMA
	$scope.guardar = function(){
		var call;

		if($scope.dataPrograma._id)
			call = ApiService.put(url  + "/" + $scope.dataPrograma._id, $scope.dataPrograma);
		else
			call = ApiService.post(url, $scope.dataPrograma);
		
		call.then(function(data){
			$scope.dataPrograma = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA PROGRAMA
	$scope.editar = function(item){
		$scope.dataPrograma = item;
	}

	//ELIMINA UNA PROGRAMA
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getAll();
	getFacultad();
})


//CONTROLADOR ENTIDAD
.controller('EntidadCtrl', function($scope, $state, Auth, ApiService, CONFIG){

	$scope.dataEntidad = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIENTIDAD;
	
	//OBTIENE LA LISTA DE ENIDADES
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listaEntidades = data;
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UNA ENTIDAD
	$scope.guardar = function(){
		var call;

		if($scope.dataEntidad._id)
			call = ApiService.put(url  + "/" + $scope.dataEntidad._id, $scope.dataEntidad);
		else
			call = ApiService.post(url, $scope.dataEntidad);
		
		call.then(function(data){
			$scope.dataEntidad = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA ENTIDAD
	$scope.editar = function(item){
		$scope.dataEntidad= item;
	}

	//ELIMINA UNA ENTIDAD
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getAll();
	
})


//CONTROLADOR GRUPO
.controller('GrupoCtrl', function($scope, $state, Auth, ApiService, CONFIG){

	$scope.dataGrupo = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIGRUPO;

	//OBTIENE LA LISTA DE PROGRAMA
	var getPrograma = function(){
		var urlFacultad = CONFIG.DOMAIN + CONFIG.APIPROGRAMA;
		ApiService.get(urlFacultad)
		.then(function(data){
			$scope.listPrograma = data;
		})
		.catch(function(err){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	
	//OBTIENE LA LISTA DE GRUPO
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listGrupo = data;
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UN GRUPO
	$scope.guardar = function(){
		var call;

		if($scope.dataGrupo._id)
			call = ApiService.put(url  + "/" + $scope.dataGrupo._id, $scope.dataGrupo);
		else
			call = ApiService.post(url, $scope.dataGrupo);
		
		call.then(function(data){
			$scope.dataGrupo = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA GRUPO
	$scope.editar = function(item){
		$scope.dataGrupo = item;
	}

	//ELIMINA UNA GRUPO
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getPrograma();
	getAll();
})


//CONTROLADOR PROYECTO
.controller('ProyectoCtrl', function($scope, $state, Auth, ApiService, CONFIG){

	$scope.dataProyecto = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIPROYECTO;

	//OBTIENE LA LISTA DE PROGRAMA
	var getGrupo = function(){
		var urlGrupo = CONFIG.DOMAIN + CONFIG.APIGRUPO;
		ApiService.get(urlGrupo)
		.then(function(data){
			$scope.listGrupo = data;
		})
		.catch(function(err){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	
	//OBTIENE LA LISTA DE GRUPO
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listProyecto = data;
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UN GRUPO
	$scope.guardar = function(){
		var call;

		if($scope.dataProyecto._id)
			call = ApiService.put(url  + "/" + $scope.dataProyecto._id, $scope.dataProyecto);
		else
			call = ApiService.post(url, $scope.dataProyecto);
		
		call.then(function(data){
			$scope.dataProyecto = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA GRUPO
	$scope.editar = function(item){
		$scope.dataProyecto = item;
	}

	//ELIMINA UNA GRUPO
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getAll();
	getGrupo();
})

//CONTROLADOR INVESTIGADOR
.controller('InvestigadorCtrl', function($scope, $state, Auth, ApiService, CONFIG){

	$scope.dataInvestigador = {};
	$scope.alert = "";
	

	var url = CONFIG.DOMAIN + CONFIG.APIINVESTIGADOR;

	//OBTIENE LA LISTA DE GRUPO
	var getGrupo = function(){
		var urlGrupo = CONFIG.DOMAIN + CONFIG.APIGRUPO;
		ApiService.get(urlGrupo)
		.then(function(data){
			$scope.listGrupo = data;
		})
		.catch(function(err){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	
	//OBTIENE LA LISTA DE INVESTIGADORES
	var getAll = function(){
		ApiService.get(url)
		.then(function(data){
			$scope.listInvestigador = data;
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
	}

	//GUARDA UN INVESTIGADOR
	$scope.guardar = function(){
		var call;

		if($scope.dataInvestigador._id)
			call = ApiService.put(url  + "/" + $scope.dataInvestigador._id, $scope.dataInvestigador);
		else
			call = ApiService.post(url, $scope.dataInvestigador);
		
		call.then(function(data){
			$scope.dataInvestigador = {};
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	//EDITA UNA INVESTIGADOR
	$scope.editar = function(item){
		$scope.dataInvestigador = item;
	}

	//ELIMINA UNA INVESTIGADOR
	$scope.eliminar = function(id){
		ApiService.remove(url + "/" + id)
		.then(function(data){
			getAll();

			$scope.alert = data.message;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);

		})
		.catch(function(e){
			var mensaje = "";
			if(e){
				mensaje = e.error;
			}else{
				mensaje = "Error en el servidor";
			}

			$scope.alert = mensaje;
			setTimeout(function(){
				$scope.alert = "";
				$scope.$apply();
			}, 3000);
		})	
	}

	getAll();
	getGrupo();
})