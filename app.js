//main toilet app

var toiletApp = angular.module("toiletApp",[]);

toiletApp.controller("toiletController", function($scope) {

    $scope.data = [
		{text: "Today is my birthday", font : "Helvetica", color :"#FFFFFF", size : 13},
		{text: "Who cares ? ", font : "Helvetica", color :"#FFFFFF", size : 13},
		{text: "We are nothing else but a dust in the galaxy", font : "Helvetica", color :"#FFFFFF", size : 13},
		{text: "This toilet is worth reading than Twilight", font : "Helvetica", color :"#FFFFFF", size : 13}
	];
	
	$scope.saveText = function(){
		console.log("test");
	}
	
});