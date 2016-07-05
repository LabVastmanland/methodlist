'use strict';

angular
  .module("app.detail", ['ngRoute', 'app.methods'])

  .config(function($routeProvider) {
    $routeProvider.when('/:id', {
      templateUrl: 'detail/view.html',
      controller: 'DetailController as ctrl'
    });
  })

  .controller("DetailController", function($scope, $routeParams, METHODS) {
    $scope.method = METHODS[$routeParams.id];
  });
