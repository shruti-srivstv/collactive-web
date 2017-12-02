App.UI = (function(self) {
  self.renderPollDetails = function(data) {
    sampleData = {
      poll: {
        id: 123,
        title: 'Brexit',
        description: 'Britain leaving EU, good idea?',
        type: 'multi',
        organization: 'British government'
      },
      answers: [
        { id: 234, title: 'Brexit', count: 14 },
        { id: 234, title: 'Remain', count: 25 },
        { id: 345, title: 'Stay but take in less immigrants', count: 45 }
      ]
    };
    data = sampleData;
    //Render view
    var source = App.Templates.pollDetails;
    var template = Handlebars.compile(source);
    var html = template(data);
  };
  return self;
})(App.UI || {});
