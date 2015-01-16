angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.fetch($scope.data).then(function(stuff) { console.log(stuff) }).catch(function() {});
  };
});
