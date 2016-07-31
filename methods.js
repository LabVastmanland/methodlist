angular
  .module("app.methods", [])
  .factory('methods', function($http) {
    function id(x) { return x; }
    return $http.get('https://gustavsobel.github.io/methodlist/data/Analyslista.csv')
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
