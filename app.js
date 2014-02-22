//main toilet app

var toiletApp = angular.module("toiletApp",['ui.bootstrap']);

toiletApp.controller("toiletController", function($scope,$modal,$http) {
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
    
    $scope.isSaved = false;
    $scope.textId = null;
    
    //This handle save data
    $scope.addData = function(showNoti){
        
        if($scope.isSaved){
            //update istead of save
            $scope.updateData(true);
            return;
        }
        
        if(!$scope.data.inputText){
            $scope.failNotiModal();
            return;
        }

        $http({
            method: 'POST', 
            url: 'dbcall/adddata.php',
            data : { 
                text : $scope.data.inputText,
                fontype : "Helvetica",  // all this 3 still mockup
			    color :"#FFFFFF", 
			    size : 13,
                posx : $scope.positionx,
                posy : $scope.positiony
            }
        }).
        success(function(data, status, headers, config) {
              $scope.isSaved = true;
              $scope.textId = data;
             if(showNoti)$scope.successNotiModal();
        }).
        error(function(data, status, headers, config) {
            console.log("AJAX Error.");
        });
    }
    
    $scope.updateData = function(showNoti){
        $http({
            method: 'POST', 
            url: 'dbcall/updatedata.php',
            data : { 
                id : $scope.textId,
                text : $scope.data.inputText,
                posx : $scope.positionx,
                posy : $scope.positiony
            }
        }).
        success(function(data, status, headers, config) {
              $scope.isSaved = true;
              $scope.textId = data;
              if(showNoti)$scope.successNotiModal();
        }).
        error(function(data, status, headers, config) {
            console.log("AJAX Error.");
        });        
    }
    
    $scope.successNotiModal = function(){
        var modalInstance = $modal.open({
          templateUrl: 'noti/notificationSuccess.html',
          controller: ModalInstanceCtrl,
          windowClass: 'app-modal-window',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
    }
    
    $scope.failNotiModal = function(){
        var modalInstance = $modal.open({
          templateUrl: 'noti/notificationFail.html',
          controller: ModalInstanceCtrl,
          windowClass: 'app-modal-window',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
    }
    
    $scope.positionx = 0 ; 
    $scope.positiony = 0 ;
	
//	$scope.saveText = function(){
//        
//        if(!$scope.data.inputText)return; //TODO: 
//		var data = {
//			text: $scope.data.inputText,
//			font : "Helvetica",
//			color :"#FFFFFF", 
//			size : 13
//		}	
//		$scope.data.push(data);
//        //console.log($scope.data);
//	}
    
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
                    scope.updatePosition(event, ui); // todo : remove this.
                },
                stop: function (event, ui) {
                    scope.updatePosition(event, ui);
                    
                    if(scope.isSaved){
                        scope.updateData(false);
                    } else {
                        scope.addData(false);
                    } 
                    //everytime you stop we update data
                }
            }); // a call to JQueryUI 
		}
	};
});

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
};
