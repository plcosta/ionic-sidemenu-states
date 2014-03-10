angular.module('myApp.controllers')

.controller('MainController', function ($scope) {

  $scope.toggleMenu = function() {
    $scope.sideMenuController.toggleLeft();
  };

});
