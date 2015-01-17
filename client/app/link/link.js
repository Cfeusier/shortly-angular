angular.module('shortly.link', [])

.controller('LinkController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLink = function(id) {
    Links.getLink(id).then(function(link) {
      $scope.data.link = link;
    }).catch(function(err) {
      console.error(err);
    });
  };

  // $scope.getLink();
  $scope.name = 'LinkController';
})