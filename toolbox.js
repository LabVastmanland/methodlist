angular
  .module('app.toolbox', [])
  .constant('_', {
    head: function (xs) {
      return xs[0];
    },
    tail: function (xs) {
      return xs.slice(1);
    }
  });
