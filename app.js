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
  })
  .controller('AppController', function($scope, $q, $location, methods) {
    $scope.personelType = 'health';

    $scope.methods = methods;

    //TODO: use select instead of location.
    $scope.$watch('selectedItem', function(method) {
      if (method) {
        $scope.select(method.ID);
      } else {
        $location.path('/');
      }
    });

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
              return method.Komponent.toLowerCase().indexOf(text.toLowerCase()) != -1;
            } catch (e) {
              return false;
            }
          }));
        }
      });
    };
  });