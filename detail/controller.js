'use strict';

angular
  .module("app.detail", ['ngRoute', 'app.methods'])

  .config(function($routeProvider) {
    $routeProvider.when('/:id', {
      templateUrl: 'detail/view.html',
      controller: 'DetailController as ctrl'
    });
  })

  .controller("DetailController", function($scope, $rootScope, $routeParams, $window, methods) {

    $scope.$on('$viewContentLoaded', function(event) {
      // Always scroll to top after loading content.
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    methods.then(function (methods) {
      $scope.method = methods.reduce(function(found, method) {
        if (found) {
          return found;
        } else if (method.__rowNum__ == $routeParams.id) {
          return method;
        }
      }, null);

      $scope.print = function () {
        $window.print();
      }
    })
  });
