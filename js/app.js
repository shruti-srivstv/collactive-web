var App = (function(self, $) {
  self.init = function(id) {
    //check initial state:
    var sampleUserData = {
      userId: '1'
    };
    App.Core._createUserObject(sampleUserData);

    var urlQuery = window.location.search.substring(1);
    var queryStrings = self.Utils.getQueryStrings(urlQuery);
    if (queryStrings.pollId) {
      App.Services
        .getPollDetails(queryStrings.pollId)
        .then(
          function fulfillHandler(data) {
            if (typeof data == 'undefined' || data.length == 0) {
              alert('Service error: getPollDetails');
            }
            var divPollDetails = document.getElementById('pollDetails');
            var divInstitutionName = document.getElementById('topBarText');
            var htmlResult = App.UI.renderPollDetails(data);
            divPollDetails.innerHTML = htmlResult;
            divPollDetails.style.display = 'block';
            divInstitutionName.innerHTML = data.poll.title;
            App.UI.createPollChart(data);
          },
          function rejectHandler(jqXHR, textStatus, errorThrown) {
            // ...
          }
        )
        .catch(function errorHandler(error) {
          // ...
        });
    }
    App.UI.applyBindings();
  };
  return self;
})(App || {}, jQuery);

App.submitIssue = function(issue) {
  //update title.
  var val = document.getElementById('new-issue').value;
  $('#topBarText').html(val);
  App.UI.switchToPage('chooseVotingOption');
};
App.Core = (function(self, $) {
  self.login = function() {
    //TODO: user auth.
    App.init();
  };
  var _user = null;
  self.getUser = function() {
    return _user;
  };
  self._createUserObject = function(data) {
    _user = new App.User(data);
  };

  self.signout = function() {};
  return self;
})(App.Core || {}, jQuery);

App.Config = (function(self, $) {
  self.SERVICE_URL = 'https://collactive.herokuapp.com/poll/get';
  return self;
})(App.Core || {}, jQuery);
