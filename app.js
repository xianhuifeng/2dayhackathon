'use strict';
var app = angular.module('af', ['ngRoute','ngAnimate']);
app.selectedData = [];
app.tops = [
    {
    	'id': 'top1',
    	'img': 'http://anf.scene7.com/is/image/anf/anf_79816_02_prod1?$category-anf$',
    	'name': 'Blythe Snit',
      'desc': 'New Arrival',
 	 		'price': '$28'
 	 	},
    {
    	'id': 'top2',
    	'img': "http://anf.scene7.com/is/image/anf/anf_78777_02_prod1?$category-anf$",
    	'name': 'Hadley Tank',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$48'
 	 	},
    {
    	'id': 'top3',
    	'img': "http://anf.scene7.com/is/image/anf/anf_78742_02_prod1?$category-anf$",
    	'name': 'Jude Tank',
      'desc': 'Online Exclusive & New Arrival',
 	 		'price': '$20'
 	 	},
];
app.bottoms = [
 	 	{
 	 		'id': 'bot1',
    	'img': 'http://anf.scene7.com/is/image/anf/anf_76944_01_prod1?$category-anf$',
    	'name': 'A&F High Rise Short-Shorts',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$29'
 	 	},
    {
    	'id': 'bot2',
    	'img': "http://anf.scene7.com/is/image/anf/anf_76349_02_prod1?$category-anf$",
    	'name': 'Savannah Skirt',
      'desc': 'New Arrival',
 	 		'price': '$40.56'
 	 	},
    {
    	'id': 'bot3',
    	'img': "http://anf.scene7.com/is/image/anf/anf_79277_01_prod1?$category-anf$",
    	'name': 'Quinn Skirt',
      'desc': 'New Arrival',
 	 		'price': '$32'
 	 	}
];
app.fakes = [
    {
    	'id': 'top1',
    	'img': 'http://anf.scene7.com/is/image/anf/anf_78992_01_prod1?$category-anf$',
    	'name': 'A&F Alyssa dress',
      'desc': 'New Arrival',
 	 		'price': '$68'
 	 	},
    {
    	'id': 'top2',
    	'img': "http://anf.scene7.com/is/image/anf/anf_78760_01_prod1?$category-anf$",
    	'name': 'A&F Alyssa dress',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$78'
 	 	},
    {
    	'id': 'top3',
    	'img': "http://anf.scene7.com/is/image/anf/anf_80551_01_prod1?$category-anf$",
    	'name': 'A&F Super dress',
      'desc': 'Online Exclusive & New Arrival',
 	 		'price': '$90'
 	 	},
];
app.models = [
	{
		'id': 'model1',
		'img': 'http://anf.scene7.com/is/image/anf/anf_lg_120790?$keyLooksCategory-anf$'
	},
	{
		'id': 'model2',
		'img': 'http://anf.scene7.com/is/image/anf/anf_lg_12842?$keyLooksCategory-anf$'
	},
	{
		'id': 'model3',
		'img': 'http://anf.scene7.com/is/image/anf/anf_lg_120786?$keyLooksCategory-anf$'
	},
	{
		'id': 'model4',
		'img': 'http://anf.scene7.com/is/image/anf/anf_lg_58970?$keyLooksCategory-anf$'
	}
];
	
app.controller('listController', function($scope) {

	$scope.tops = app.tops;
  $scope.bottoms = app.bottoms;
  $scope.fakes = app.fakes;
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

});

app.controller('fittingRoomController', function($scope){
	$scope.selectedData = app.selectedData;
	$scope.selectedDataImg = [];
	$scope.models = app.models;
	$scope.selectedtops = [];
	$scope.selectedbots = [];

	for (var i = 0; i < $scope.selectedData.length; i++) {
		if($scope.selectedData[i].id.match(/top/)){
			$scope.selectedtops.push($scope.selectedData[i]);
		}else{
			$scope.selectedbots.push($scope.selectedData[i]);
		}
	};

	 $scope.match = function (data) {
	 	$scope.matchData = data;
	  if(data.id.match(/top/)){
			var ran = Math.ceil(Math.random()* $scope.selectedbots.length);
			var madeId = 'bot'+ String(ran);
			for (var i = 0; i < $scope.selectedData.length; i++) {
				if($scope.selectedData[i]['id'] === madeId){
					$scope.ran = $scope.selectedData[i];
					break;
				}
			};
		}else{
			var ran = Math.ceil(Math.random()* $scope.selectedtops.length);
			var madeId = 'top'+ String(ran);
			for (var i = 0; i < $scope.selectedData.length; i++) {
				if($scope.selectedData[i]['id'] === madeId){
					$scope.ran = $scope.selectedData[i];
					break;
				}
			};
		}
  };

});

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
      otherwise({
        redirectTo: '/main'
      });
	}]);