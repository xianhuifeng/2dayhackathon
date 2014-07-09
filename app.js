'use strict';
var app = angular.module('af', ['ngRoute',
																'ngAnimate',
																'afControllers']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'main.html',
        controller: 'listController'
      }).
      when('/fittingRoom', {
        templateUrl: 'fittingRoom.html',
        controller: 'fittingRoomController'
      }).
      when('/shoppingBag', {
        templateUrl: 'shoppingBag.html',
        controller: 'shoppingBagController'
      }).
      when('/checkout', {
        templateUrl: 'checkout.html',
        controller: 'checkoutController'
      }).
      otherwise({
        redirectTo: '/main'
      });
	}]);