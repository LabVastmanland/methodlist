angular
  .module("app", [
    'ngRoute',
    'ngMaterial',
    'app.methods',
    'app.detail',
    'app.list',
    'app.notice',
    'app.spinner'
  ])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
    $routeProvider.otherwise({redirectTo: '/'});
  })
  .controller('AppController', function($scope, $q, $location, methods) {
    $scope.personelType = 'health';

    methods.then(function (ms) {
      $scope.methods = ms;
    })

    $scope.disclaimer = true;

    $scope.toggleDisclaimer = function(show) {
      $scope.disclaimer = false;
    }

    $scope.$watch('selectedItem', function(method) {
      if (method) {
        $scope.select(method['ID']);
      }
    });

    $scope.select = function (index) {
      $location.path('/' + index);
    }

    $scope.searchFor = function (substr) {
      return function (text) {
        return text.toLowerCase().indexOf(substr.toLowerCase()) !== -1;
      }
    }

    $scope.search = function (text) {
      return $q(function(resolve, reject){
        if (!text) {
          resolve($scope.methods);
        } else {
          resolve($scope.methods.filter(function (method) {
            try {
              var names = [method.Komponent];
              try {
                names = names.concat(method['Alternativa Sökord'].split(', '));
              } catch (e) {};
              return names.reduce(function(found, name){
                return found || name.toLowerCase().indexOf(text.toLowerCase()) != -1;
              }, false);
            } catch (e) {
              return false;
            }
          }));
        }
      });
    };
  });
