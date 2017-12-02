var App = (function(self, $) {
  self.init = function(id) {
    //check initial state:
    var urlQuery = window.location.search.substring(1);
    var queryStrings = self.Utils.getQueryStrings(urlQuery);
    if (queryStrings.pollId) {
      //show poll
    }
  };
  return self;
})(App || {}, jQuery);

App.Core = (function(self, $) {
  self.login = function() {
    //TODO: user auth.
    App.init();
  };
  var _user = null;
  self.signout = function() {};
  return self;
})(App.Core || {}, jQuery);
