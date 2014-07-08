var app = angular.module('af', []);

app.controller('listController', function($scope) {

	$scope.tops = [
    {
    	'img': 'http://anf.scene7.com/is/image/anf/anf_79816_02_prod1?$category-anf$',
    	'name': 'Blythe Snit',
      'desc': 'New Arrival',
 	 		'price': '$28'
 	 	},
    {
    	'img': "http://anf.scene7.com/is/image/anf/anf_78777_02_prod1?$category-anf$",
    	'name': 'Hadley Tank',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$48'
 	 	},
    {
    	'img': "http://anf.scene7.com/is/image/anf/anf_78742_02_prod1?$category-anf$",
    	'name': 'Jude Tank',
      'desc': 'Online Exclusive & New Arrival',
 	 		'price': '$20'
 	 	},
  ];

  $scope.bottoms = [
 	 	{
    	'img': 'http://anf.scene7.com/is/image/anf/anf_76944_01_prod1?$category-anf$',
    	'name': 'A&F High Rise Short-Shorts',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$29'
 	 	},
    {
    	'img': "http://anf.scene7.com/is/image/anf/anf_76349_02_prod1?$category-anf$",
    	'name': 'Savannah Skirt',
      'desc': 'New Arrival',
 	 		'price': '$40.56'
 	 	},
    {
    	'img': "http://anf.scene7.com/is/image/anf/anf_79277_01_prod1?$category-anf$",
    	'name': 'Quinn Skirt',
      'desc': 'New Arrival',
 	 		'price': '$32'
 	 	}
  ];


  $scope.count = 0;
  $scope.add = function ($event) {
  	// alert('Added to your cart already!');
  	$scope.count += 1;
  	//add to shoppingBag 
  	console.log('target',$event.target);

  };

  $scope.match = function () {
  	alert("matching");
  };
});
