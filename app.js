//main toilet app

var toiletApp = angular.module("toiletApp",["ngAnimate"]);

toiletApp.controller("toiletController", function($scope,$http) {

    var init = function(){ //get data from server
        //init component
        //console.log("init data");
        $http({method: 'GET', url: 'getdata.php'}).
          success(function(data, status, headers, config) {
              $scope.data = data;
            // this callback will be called asynchronously
            // when the response is available
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
    }
    init();
    
    $scope.positionx = 0 ; 
    $scope.positiony = 0 ;
	
	$scope.saveText = function(){
        
        if(!$scope.data.inputText)return; //TODO: 
		var data = {
			text:$scope.data.inputText, 
			font : "Helvetica", 
			color :"#FFFFFF", 
			size : 13
		}	
		$scope.data.push(data);
        //console.log($scope.data);
	}

});

//dragMe directive 
toiletApp.directive('dragMe', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attr, ctrl) {
			elem.draggable({
                create: function( event, ui ) {
                    //duplication ? 
                    scope[attr.xpos] = ui.position.left;
                    scope[attr.ypos] = ui.position.top;
                    scope.$apply();
                },
                stop: function (event, ui) {
                    scope[attr.xpos] = ui.position.left;
                    scope[attr.ypos] = ui.position.top;
                    scope.$apply();
                }
            }); // a call to JQueryUI 
		}
	};
});