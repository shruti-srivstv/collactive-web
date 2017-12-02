App.Utils = (function(self) {
  self.getQueryStrings = function(query) {
    var queries = {};
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (typeof queries[pair[0]] === 'undefined') {
        queries[pair[0]] = pair[1].split('/', 1)[0];
      } else if (typeof queries[pair[0]] === 'undefined') {
        var arr2 = [queries[pair[0]], pair[1]];
        queries[pair[0]] = arr2;
      } else if (typeof queries[pair[0]] === 'string') {
        var arr = [queries[pair[0]], pair[1]];
        queries[pair[0]] = arr;
      } else {
        queries[pair[0]].push(pair[1]);
        alert(queries[pair[0]]);
      }
    }
    return queries;
  };
  return self;
})(App.Utils || {});
