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
        
        $scope.positionx = ($(window).width()/2) ; 
        $scope.positiony = ($(window).height()/2) ;
    }
    init();
    
    
    $scope.isSaved = false;
    $scope.textId = null;
    
    //This handle save data
    $scope.addData = function(showNoti){
        console.log($scope.font);
        if($scope.isSaved){
            //update instead of save
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
                //id seems to have somthing wrong
                id : parseInt($scope.textId),
                text : $scope.data.inputText,
                font : $scope.font.fontfamily,
                size : 18,
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
    
    $scope.fonts =[
        {fontid : 1,fontfamily: 'Sue Ellen Francisco'},
        {fontid : 2,fontfamily: 'Montez'},
        {fontid : 3,fontfamily: 'Bad Script'},
        {fontid : 4,fontfamily: 'Waiting for the Sunrise'},
        {fontid : 5,fontfamily: 'Gochi Hand'},
        {fontid : 6,fontfamily: 'Dawning of a New Day'},
        {fontid : 7,fontfamily: 'Over the Rainbow'}
    ]
    //This set default font to the first choice
    $scope.font = $scope.fonts[0];
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
			elem.draggable({ // a call to JQueryUI 
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
            }); 
		}
	};
});

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
};
