'use strict';


angular.module('petitionsorgApp')
	.factory('victoriesService', ['$http', function($http) {
		var victoriesService = {
			lasts: function() {
				return $http.get('data/lastVictories.json')
					.then(function(result) {
						return result;
					});
			}
		};
		return victoriesService;
	}]);