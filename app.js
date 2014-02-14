//main toilet app

var toiletApp = angular.module("toiletApp",[]);

toiletApp.controller("toiletController", function($scope) {

    $scope.data = [
		{text: "Today is my birthday", font : "Helvetica", color :"#FFFFFF", size : 13},
		{text: "Who cares ? ", font : "Helvetica", color :"#fff", size : 13},
		{text: "We are nothing else but a dust in the galaxy",font: "Helvetica", color : "#FFFFFF", size : 13},
		{text: "This toilet is worth reading than Twilight", font : "Helvetica", color : "#FFFFFF", size : 13}
	];
	
	$scope.saveText = function(){
        
        if(!$scope.data.inputText)return; //TODO: 
		var data = {
			text:$scope.data.inputText, 
			font : "Helvetica", 
			color :"#FFFFFF", 
			size : 13
		}	
		$scope.data.push(data);
	}

});

toiletApp.directive('dragMe', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attr, ctrl) {
			elem.draggable();
		}
	};
});