App.Templates = {};

App.Templates.pollDetails = `
  <div class="poll-details">
  <h1>{{poll.title}}</h1>
  <div class="organization">
    {{poll.organization}}
  </div>
  <p>{{poll.description}}</p>
  <div class="vote-standings type-{{poll.type}}">
      {{#each answers}}
        <div>{{title}} - {{count}}</div>
      {{/each}}
  </div>
</div>
`;
