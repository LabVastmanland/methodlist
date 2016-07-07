angular
  .module("app.methods", [])
  .factory('methods', function($http) {
    function id(x) { return x; }
    return $http.get('http://gustavsobel.github.io/methodlist/data/Analyslista.htm')
      .then(function (response) {
        if (!response.status === 200) {
          throw new Error('Could not fetch method data.');
        }

        var trPattern = /(?:<tr[\s\S]*?>)([\s\S]*?)(?:<\/tr[\s\S]*?>)/gi,
            tdPattern = /(?:<td[\s\S]*?>)([\s\S]*?)(?:<\/td[\s\S]*?>)/gi,
            tr, td, list = [];

        while(tr = trPattern.exec(response.data)) {
          var row = [];
          while(td = tdPattern.exec(tr[1])) {
            var value = td[1]
              .replace(/&nbsp;/ig, '') // Remove hard spaces
              .replace(/<[\s\S]*?>/gi, '') // Remove embeded script-tags
              .trim()
            row.push(value);
          }
          list.push(row);
        }

        var headers = list[0].filter(id),
            values = list.slice(1);

        return values.map(function(row) {
          return headers.reduce(function (json, key, i) {
            json[key] = row[i];
            return json;
          }, {});
        }).filter(function (obj) {
          return obj.ID && obj.Komponent;
        })
      });
  });
