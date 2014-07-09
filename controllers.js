'use strict';

/* Controllers */

var afControllers = angular.module('afControllers', []);

afControllers.selectedData = [];
afControllers.inshoppingBag = [];
afControllers.tops = [
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
afControllers.bottoms = [
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
afControllers.fakes = [
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
afControllers.models = [
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
afControllers.controller('listController', ['$scope', 
	function($scope){
		$scope.tops = afControllers.tops;
	  $scope.bottoms = afControllers.bottoms;
	  $scope.fakes = afControllers.fakes;
	  $scope.count = 0;
	  $scope.selectedData = afControllers.selectedData;
	  $scope.add = function (selected) {
			if(!selected.inbag){//inbag is not defined in data, it will be added after user click the add to bag, originally it is undefined, and then it is true
		  	$scope.selectedData.push(selected);
	  		$scope.count += 1;
		  	selected.inbag = true;
			}else{
				alert('Already in shopping bag~');
			}
	  };
	}]);

afControllers.controller('fittingRoomController', ['$scope',
	function($scope){
	$scope.selectedData = afControllers.selectedData;
	$scope.selectedDataImg = [];
	$scope.models = afControllers.models;
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

  $scope.like = function () {
  	alert('You liked it');
  };
  //NOT WORKING YET////////////////////////////////
  // $scope.addToShoppingBag = function (e) {
  // 	$scope.inshoppingBag = app.inshoppingBag;
  // 	$scope.inshoppingBag.push();
  // 	console.log($(e.target).data('id'));
  // };
  /////////////////////////////////////////////////
}]);

afControllers.controller('shoppingBagController', ['$scope',
	function($scope){
		$scope.test = 'hello';
	}]);

sfControllers.controller('checkoutController', ['$scope', 
	function($scope){
		$scope.testcheckout = 'checkingout hey';
	}]);












