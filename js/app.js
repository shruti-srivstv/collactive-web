var App = (function(self, $) {
  self.init = function(id) {
    //check initial state:
    var urlQuery = window.location.search.substring(1);
    var queryStrings = self.Utils.getQueryStrings(urlQuery);
    if (queryStrings.pollId) {
      App.Services
        .getPollDetails(pollId)
        .then(
          function fulfillHandler(data) {
            if (typeof data == 'undefined' || data.length == 0) {
              alert('Service error: getPollDetails');
            }
            App.UI.renderPollDetails(data);
          },
          function rejectHandler(jqXHR, textStatus, errorThrown) {
            // ...
          }
        )
        .catch(function errorHandler(error) {
          // ...
        });
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

App.Config = (function(self, $) {
  self.SERVICE_URL = '';
  return self;
})(App.Core || {}, jQuery);
