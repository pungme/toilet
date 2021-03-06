//main toilet app
//TODO : add option to adjust text size !

var toiletApp = angular.module("toiletApp",['ui.bootstrap']);

toiletApp.controller("toiletController", function($scope,$modal,$http) {
    var init = function(){ 
        $http({method: 'GET', url: 'dbcall/getdata.php'}).
          success(function(data, status, headers, config) {
              $scope.data = data;
          }).
          error(function(data, status, headers, config) {
              console.log("AJAX Error.");
          });
        
        $scope.positionx = ($(window).width()/2) ; 
        $scope.positiony = ($(window).height()/2) ;
    }
    init();
    
    
    $scope.isSaved = false;
    $scope.textId = null;
    
    $scope.addData = function(showNoti){
        console.log($scope.font);
        if($scope.isSaved){
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
                font : $scope.font.fontfamily,
			    color :"#FFFFFF", 
			    size : 18,
                posx : $scope.positionx,
                posy : $scope.positiony
            }
        }).
        success(function(data, status, headers, config) {
              $scope.isSaved = true;
              console.log(data);
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
                id : parseInt($scope.textId),
                text : $scope.data.inputText,
                font : $scope.font.fontfamily,
                size : 18,
                posx : $scope.positionx,
                posy : $scope.positiony
            }
        }).
        success(function(data, status, headers, config) {
            // TODO: call back on
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
    
    $scope.fonts =[
        {fontid : 1,fontfamily: 'Sue Ellen Francisco'},
        {fontid : 2,fontfamily: 'Montez'},
        {fontid : 3,fontfamily: 'Bad Script'},
        {fontid : 4,fontfamily: 'Waiting for the Sunrise'},
        {fontid : 5,fontfamily: 'Gochi Hand'},
        {fontid : 6,fontfamily: 'Dawning of a New Day'},
        {fontid : 7,fontfamily: 'Over the Rainbow'}
    ]
    $scope.font = $scope.fonts[0];
});

//draggable directive 
toiletApp.directive('dragMe', function() {
	return {
		restrict: 'A',
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
                    
                    if(scope.isSaved){
                        scope.updateData(false);
                    } else {
                        scope.addData(false);
                    } 
                }
            }); 
		}
	};
});

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
};
