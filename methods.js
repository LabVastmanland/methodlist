angular
  .module("app.methods", ['app.toolbox'])
  .factory('methods', function($http, _) {
    function id(x) { return x; }
    // return $http.get('https://gustavsobel.github.io/methodlist/data/Analyslista.csv')
    return $http.get('http://127.0.0.1:8888/data/Analyslista.csv')
      .then(function (response) {
        if (response.status !== 200) { throw new Error('Could not fetch method data.') }

        var parsed = Papa.parse(response.data, {
          delimiter: ';',
          header: true,
          skipEmptyLines: true
        });

        return parsed.data.filter(function (obj) {
          return obj.Komponent;
        });
      });
  });
