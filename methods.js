angular
  .module("app.methods", [])
  .factory('methods', function($http) {
    return [{
      "ID": "1",
      "Komponent": "ADA",
      "Alternativa Sökord": "ujk, polå",
      "System": "S-",
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
    },
    {
      "ID": "2",
      "Komponent": "EPA",
      "Alternativa Sökord": "qwe, poiu",
      "System": "B-",
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
    },
    {
      "ID": "3",
      "Komponent": "åsdfasdf"
    },
    {
      "ID": "4",
      "Komponent": "1sdfasdf"
    },
    {
      "ID": "5",
      "Komponent": "msdfasdf"
    }
  ];
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
