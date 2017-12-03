  App.Services = (function(self) {
  self.getPollDetails = function(pollId) {
    var SERVICE_NAME = 'poll';
    var options = {
      type: 'GET',
      url: App.Config.SERVICE_URL + '/' + SERVICE_NAME + '/' + pollId,
      contentType: "application/json",

      dataType: 'json',
      error: function(xhr) {
        alert('Service unavailable: ' + SERVICE_NAME);
      }
    };
    return new Promise(function(resolve) {
      $.ajax(options).done(function(data) {
        resolve(data);
      });
    });
  };
  return self;
})(App.Services || {});
