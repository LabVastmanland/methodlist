var app = angular.module("MethodApp", ['ngMaterial']);

app.controller("MethodController", function($scope, $q) {
  $scope.personelType = 'health';
  $scope.methods = methods;

  this.select = function (method) {
    this.selectedItem = method;
  }

  this.querySearch = function (text) {
    return $q(function(resolve, reject){
      if (!text) {
        resolve(methods);
      } else {
        resolve(methods.filter(function (method) {
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
