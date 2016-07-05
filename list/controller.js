'use strict';

angular
  .module("app.list", ['ngRoute', 'app.methods'])

  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'list/view.html',
      controller: 'ListController as ctrl'
    });
  })

  .controller("ListController", function($scope, $q, $location, METHODS) {
    $scope.personelType = 'health';
    $scope.methods = METHODS;

    $scope.select = function (index) {
      $location.path('/' + index);
    }

    $scope.search = function (text) {
      return $q(function(resolve, reject){
        if (!text) {
          resolve($scope.methods);
        } else {
          resolve($scope.methods.filter(function (method) {
            try {
              return method.component.toLowerCase().indexOf(text.toLowerCase()) != -1;
            } catch (e) {
              return false;
            }
          }));
        }
      });
    };
  });
