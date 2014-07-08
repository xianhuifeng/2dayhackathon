'use strict';
var app = angular.module('af', ['ngRoute']);
app.selectedData = [];
app.controller('listController', function($scope) {

	$scope.tops = [
    {
    	'id': '1',
    	'img': 'http://anf.scene7.com/is/image/anf/anf_79816_02_prod1?$category-anf$',
    	'name': 'Blythe Snit',
      'desc': 'New Arrival',
 	 		'price': '$28'
 	 	},
    {
    	'id': '2',
    	'img': "http://anf.scene7.com/is/image/anf/anf_78777_02_prod1?$category-anf$",
    	'name': 'Hadley Tank',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$48'
 	 	},
    {
    	'id': '3',
    	'img': "http://anf.scene7.com/is/image/anf/anf_78742_02_prod1?$category-anf$",
    	'name': 'Jude Tank',
      'desc': 'Online Exclusive & New Arrival',
 	 		'price': '$20'
 	 	},
  ];

  $scope.bottoms = [
 	 	{
 	 		'id': '4',
    	'img': 'http://anf.scene7.com/is/image/anf/anf_76944_01_prod1?$category-anf$',
    	'name': 'A&F High Rise Short-Shorts',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$29'
 	 	},
    {
    	'id': '5',
    	'img': "http://anf.scene7.com/is/image/anf/anf_76349_02_prod1?$category-anf$",
    	'name': 'Savannah Skirt',
      'desc': 'New Arrival',
 	 		'price': '$40.56'
 	 	},
    {
    	'id': '6',
    	'img': "http://anf.scene7.com/is/image/anf/anf_79277_01_prod1?$category-anf$",
    	'name': 'Quinn Skirt',
      'desc': 'New Arrival',
 	 		'price': '$32'
 	 	}
  ];

  $scope.count = 0;
  $scope.selectedData = app.selectedData;
  $scope.add = function (selected) {
  	//add to shoppingBag 
  	console.log("selected", selected);
		if(!selected.inbag){//inbag is not defined in data, it will be added after user click the add to bag, originally it is undefined, and then it is true
	  	$scope.selectedData.push(selected);
  		$scope.count += 1;
	  	selected.inbag = true;
		}else{
			alert('Already in shopping bag~');
		}
  };

  $scope.match = function (data) {
  	alert("matching");
  	console.log('data of matching', data);
  };
});

app.controller('closetController', function($scope){
	$scope.test = "Hello closet";
});
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'main.html',
        controller: 'listController'
      }).
      when('/closet', {
        templateUrl: 'closet.html',
        controller: 'closetController'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);