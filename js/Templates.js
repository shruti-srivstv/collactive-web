App.Templates = {};

App.Templates.pollDetails = `
  <div class="poll-details">
  <div class="organization">
    <i class="fa fa-map-marker"></i> {{poll.organization}}
  </div>
  <p><i class="fa fa-lightbulb-o"></i> {{poll.description}}</p>
  <div class="vote-standings type-{{poll.type}}">
    <p class="vote-standings-header"><i class="fa fa-flag"></i> Vote Standings</p>
    <div class="canvas-wrapper"><canvas id="vote-chart" width="400" height="400"></canvas></div>
      <button class="btn-propose" onclick="App.UI.switchToPage('newIssue')">Propose another Solution</button>
  </div> 
  
</div>
`;
