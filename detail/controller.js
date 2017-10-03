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
        } else if (method['ID'] == $routeParams.id) {
          return method;
        }
      }, null);

    })

    $scope.convertIconName = function (name) {
      try {
        return name.match(/[a-zåäö]+/i)[0].toLowerCase();
      } catch (e) {
        return name;
      }
    }

    $scope.print = function () {
      $window.print();
    }
  })

  .directive('expandableText', function() {
    return {
      restrict: 'E',
      scope: {
        "text": "@"
      },
      controller: ['$scope', function ShortenTextController($scope) {
        $scope.showMore = $scope.text.length < 600
        $scope.longText = $scope.text.trim()
        $scope.shortText = $scope.longText.substr(0, 500) + "..."
        $scope.setShowMore = function (value) {
          $scope.showMore = value
        }
      }],
      templateUrl: 'detail/expandable-text.html'
    };
  });
