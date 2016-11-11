angular
  .module("app.methods", [])
  .factory('methods', function($http) {
    function id(x) { return x; }
    return $http.get('/data/Analyslista.xlsx', { responseType: "arraybuffer" })
      .then(function (response) {
        if (response.status !== 200) { throw new Error('Could not fetch method data.') }

        /* convert data to binary string */
        var data = new Uint8Array(response.data);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        var bstr = arr.join("");

        /* Read binary into Workbook object */
        var wb = XLSX.read(bstr, {type:"binary"});

        // Convert first sheet to json array
        var methods = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);

        console.log(methods)
        // Sort methods by component name.
        return methods.sort(function (a, b) {
          return a.Komponent.localeCompare(b.Komponent);
        })
      });
  });
