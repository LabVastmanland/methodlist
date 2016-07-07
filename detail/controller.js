'use strict';

angular
  .module("app.detail", ['ngRoute', 'app.methods'])

  .config(function($routeProvider) {
    $routeProvider.when('/:id', {
      templateUrl: 'detail/view.html',
      controller: 'DetailController as ctrl'
    });
  })

  .controller("DetailController", function($scope, $routeParams, methods) {
    methods.then(function (methods) {
      $scope.method = methods.reduce(function(found, method) {
        if (found) {
          return found;
        } else if (method.ID == $routeParams.id) {
          return method;
        }
      }, null);
    })
  });
