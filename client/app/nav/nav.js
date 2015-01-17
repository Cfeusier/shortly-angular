angular.module('shortly.nav', [])
.controller('NavController', function ($scope, Auth) {

  $scope.isValid = function(){
    return Auth.isAuth();
  };

  $scope.signout = function(){
    Auth.signout();
  };

  $scope.name = 'NavController';
});