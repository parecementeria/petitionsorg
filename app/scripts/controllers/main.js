'use strict';

/**
 * @ngdoc function
 * @name petitionsorgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the petitionsorgApp
 */
angular.module('petitionsorgApp')
	.controller('MainCtrl', ['$scope', 'victoriesService', function ($scope, victoriesService) {
		victoriesService.lasts().then(function(response) {
			$scope.victories = response.data;
		});
	}]);