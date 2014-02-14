//main toilet app

var toiletApp = angular.module("toiletApp",[]);

toiletApp.controller("toiletController", function($scope,$http) {

//    var init = function(){
//        //init component
//        //console.log("init data");
//        $http({method: 'GET', url: '/someUrl'}).
//          success(function(data, status, headers, config) {
//              console.log("success");
//            // this callback will be called asynchronously
//            // when the response is available
//          }).
//          error(function(data, status, headers, config) {
//              console.log("fail");
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//          });
//    }
//    init();
    
    $scope.positionx = 0 ; 
    $scope.positiony = 0 ;
    
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
			elem.draggable({
                stop: function (event, ui) {
                    scope[attr.xpos] = ui.position.left;
                    scope[attr.ypos] = ui.position.top;
                    scope.$apply();
                }
            }); // a call to JQueryUI 
		}
	};
});