//main toilet app

var toiletApp = angular.module("toiletApp",["ngAnimate"]);

toiletApp.controller("toiletController", function($scope,$http) {

    var init = function(){ //get data from server
        //init component
        $http({method: 'GET', url: 'dbcall/getdata.php'}).
          success(function(data, status, headers, config) {
              $scope.data = data;
          }).
          error(function(data, status, headers, config) {
            console.log("AJAX Error.");
          });
    }
    init();
    
    $scope.addData = function(){
        //console.log($scope.data.inputText);
        $http({
            method: 'POST', 
            url: 'dbcall/adddata.php',
            data : { 
                text : $scope.data.inputText,
                fontype : "Helvetica", 
			    color :"#FFFFFF", 
			    size : 13,
                posx : $scope.positionx,
                posy : $scope.positiony
            }
        }).
          success(function(data, status, headers, config) {
              // call back add data
             // $scope.data = data;
          }).
          error(function(data, status, headers, config) {
            console.log("AJAX Error.");
          });
    }
    
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
        
        //Should directive has their own controller ? 
        controller: ['$scope', '$http', function($scope, $http) {
            $scope.updatePosition = function(event, ui) {
              $scope.positionx = ui.position.left;
              $scope.positiony = ui.position.top;
              $scope.$apply();
            }
        }],
        
		link: function(scope, elem, attr, ctrl) {
			elem.draggable({
                drag: function( event, ui ) {
                    scope.updatePosition(event, ui); 
                },
                stop: function (event, ui) {
                    scope.updatePosition(event, ui);
                }
            }); // a call to JQueryUI 
		}
	};
});