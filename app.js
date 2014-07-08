var app = angular.module('af', []);

app.controller('listController', function($scope) {

	$scope.tops = [
    {
    	'name': 'Blythe Snit',
      'desc': 'New Arrival',
 	 		'price': '$28'
 	 	},
    {
    	'name': 'Hadley Tank',
      'desc': 'Flagship Exclusvie',
 	 		'price': '$48'
 	 	},
    {
    	'name': 'Jude Tank',
      'desc': 'Online Exclusive & New Arrival',
 	 		'price': '$20'
 	 	}
  ];

  $scope.add = function () {
  	alert('Added to your cart already!');
  };

  $scope.match = function () {
  	alert("matching");
  };
});
