'use strict';

angular
  .module("app.list", ['ngRoute', 'app.methods'])

  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'list/view.html',
      controller: 'ListController as ctrl'
    });
  })

  .controller("ListController", function() {});
