'use strict';

angular
  .module("app.list", ['ngRoute', 'app.methods', 'app.spinner'])

  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'list/view.html',
      controller: 'ListController as ctrl'
    });
  })

  .controller("ListController", function($scope, $window, $location, $anchorScroll, methods) {
    $scope.alphabet = '#ABCDEFGHIJKLMNOPQRSTUVXYZÅÄÖ';

    methods.then(function (methods) {
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

      $scope.goToHash = function (anchor) {
        if ($location.hash() !== anchor) {
          $location.hash(anchor);
        } else {
          $anchorScroll();
        }
      };

      $scope.goToTop = function () {
        $location.hash(null);
        $anchorScroll();
      }

      // Scroll to top behavior.
      var scrollThreshold = 100;
      $scope.showReturnToTop = $window.scrollY > scrollThreshold;

      angular.element(window).on('scroll', function (event) {
        var old = $scope.showReturnToTop;
        $scope.showReturnToTop = $window.scrollY > scrollThreshold;

        if ($scope.showReturnToTop != old) {
          $scope.$apply();
        }
      });
    });
  });
