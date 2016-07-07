angular
  .module("app.methods", [])
  .factory('methods', function($http) {
    return [{
      "ID": "1",
      "Komponent": "ADA",
      "Alternativa Sökord": "asdfasf, aasdfsdf",
      "System": "asdf",
      "Specialitet": "fdsa",
      "Klass": "qwerqwer",
      "Rörfärg": "fdasasdf",
      "Provtagning": "cxzv",
      "Övrigt": "sthrtg",
      "Remisstext": "cvbhnhfgd",
      "Remisslänk": "sdfgwer",
      "Anges på remiss": "qerqew",
      "Laboratoriet tillhanda": "qwer",
      "Provhantering": "jjhg",
      "Förvaring/Hållbarhet": "tyredv",
      "Skickas till": "hm gfa",
      "Weblänk": "serq",
      "Pris": "fsb",
      "Uppdaterad": "sdfbc",
      "Sign.": "wertwrd"
    }];
    return $http.get('http://gustavsobel.github.io/methodlist/data/Analyslista.csv')
      .then(function (response) {
        if (!response.status === 200) {
          throw new Error('Could not fetch method data.');
        }

        var list = response.data.split('\n');

        list = list.map(function (row) {
          return row.split(';');
        })

        // console.log(list[0]);
      });
  });
