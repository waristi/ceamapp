angular.module('appWeb.services', [])

.factory('ApiService', function($http, $q){
 	
 	//METODO GET
 	var get = function(url){
	  	var deferred = $q.defer(); 
	  
	  	$http.get(url)
	  	.then(function successCallback(response) {
	  		deferred.resolve(response.data);  
	    }, function errorCallback(response) {
	        deferred.reject(response.data); 
	 	});

	  	return deferred.promise;
 	}
 
	//METODO POST
 	var post = function(url, params){
  		var deferred = $q.defer(); 
  
 		$http.post(url, params)
  		.then(function successCallback(response) {
   			deferred.resolve(response.data);  
    	}, function errorCallback(response) {
        	deferred.reject(response.data);
     	});

  		return deferred.promise;
	}

	//METODO PUT
	var put = function(url, params){
  		var deferred = $q.defer(); 
  
  		$http.put(url, params)
  		.then(function successCallback(response) {
   			deferred.resolve(response.data);  
     	}, function errorCallback(response) {
        	deferred.reject(response.data);
     	});

		return deferred.promise;
 	}


 	//METODO DELETE
	var remove = function(url){
  		var deferred = $q.defer(); 
  
 		$http.delete(url)
  		.then(function successCallback(response) {
			deferred.resolve(response.data);  
     	}, function errorCallback(response) {
        	deferred.reject(response.data);
     	});

		return deferred.promise;
 	}


 	return  {
  	   get: get,
       post: post,
       put: put,
       remove: remove
   	};
})

.factory('Auth', function(){
 	var user;

 	return{
     	setUser : function(aUser){
        	user = aUser;
    	},
     	getUser : function(){
    		return user;
    	},
     	isLoggedIn : function(){
    		return(user)? user : false;
    	}
 	}
})
