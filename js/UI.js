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
    //Render view
    var source = App.Templates.pollDetails;
    var template = Handlebars.compile(source);
    var html = template(data);
    return html;
  };
  self.createPollChart = function(data) {
    var ctx = document.getElementById('vote-chart').getContext('2d');

    var labels = [];
    var values = [];
    data.answers.map(function(el) {
      labels.push(el.title + ' (' + el.count + ')');
      values.push(el.count);
    });

    var chartData = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: values,
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
        }
      ]
    };
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: chartData
    });
  };
  self.switchToPage = function(id) {
    $('.page').hide();
    $('#' + id).show();
  };
  window.toggleMenu = function() {
    var divTopNav = document.getElementById('topnav');
    if (divTopNav.className === 'topnav') {
      divTopNav.className += ' responsive';
    } else {
      divTopNav.className = 'topnav';
    }
  };
  return self;
})(App.UI || {});
