'use strict';

/**
 * @ngdoc overview
 * @name petitionsorgApp
 * @description
 * # petitionsorgApp
 *
 * Main module of the application.
 */
angular
  .module('petitionsorgApp', [
    // 'ngAnimate', commented beacuse compatibility problems whith ui.bootstrap
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
