App.User = function(userData) {
  var that = this;
  this.data = {
    userId: userData.userId
  };
};

App.User.prototype.getUserId = function() {
  return this.data.userId;
};
