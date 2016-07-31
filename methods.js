angular
  .module("app.methods", ['app.toolbox'])
  .factory('methods', function($http, _) {
    function id(x) { return x; }
    // return $http.get('https://gustavsobel.github.io/methodlist/data/Analyslista.csv')
    return $http.get('http://127.0.0.1:8888/data/Analyslista.csv')
      .then(function (response) {
        if (response.status !== 200) { throw new Error('Could not fetch method data.') }
        var rows = response.data.split('\n'),
            headers = _.head(rows).split(';'),
            data = _.tail(rows).map(function (row) {
              return row.split(';');
            });

        var objects = data.map(function (values) {
          if (values.length < headers.length) { return {} };

          var obj = {};

          for (var i = 0; i < headers.length; i++) {
            obj[headers[i]] = values[i].trim();
          }

          return obj;
        });

        return objects.filter(function (obj) {
          return Object.keys(obj).length > 0;
        });
      });
  });
