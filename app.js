angular
  .module("app", [
    'ngRoute',
    'ngMaterial',
    'app.methods',
    'app.list',
    'app.detail'
  ])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    // $locationProvider.html5Mode(true);
  });
