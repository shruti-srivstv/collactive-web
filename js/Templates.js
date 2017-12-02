App.Templates = {};

App.Templates.pollDetails = `
  <div class="poll-details">
  <div class="organization">
    {{poll.organization}}
  </div>
  <p><i class="fa fa-info-circle"></i> {{poll.description}}</p>
  <div class="vote-standings type-{{poll.type}}">
      {{#each answers}}
        <div>{{title}} - {{count}}</div>
      {{/each}}
  </div>
</div>
`;
