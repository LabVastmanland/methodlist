'use strict';

angular
  .module("app.list", ['ngRoute', 'app.methods'])

  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'list/view.html',
      controller: 'ListController as ctrl'
    });
  })

  .controller("ListController", function($scope, methods) {
    $scope.alphabet = '#ABCDEFGHIJKLMNOPQRSTUVXYZÅÄÖ';

    $scope.groups = methods.reduce(function (groups, method) {
      var first = method.Komponent.toUpperCase().charAt(0);

      if (!first.match(/[a-zåäö]/i)) {
        first = '#';
      }

      if (!groups[first]) {
        groups[first] = [];
      }

      groups[first].push(method);

      return groups;
    }, {})

    $scope.letters = Object.keys($scope.groups);
  });
