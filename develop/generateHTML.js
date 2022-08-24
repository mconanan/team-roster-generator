const index = require('./index');

function generateHTML(data) {
    // place for each for each team member in team roster
    // for (let i = 0; i < teamRoster.length; i++) {
    
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Team Roster</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </head>
        <body>
        <h1>My Team</h1>
        <div class="card" style="width: 18rem">
      <div class="card-header">${data.managerName}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.managerId}</li>
      <li class="list-group-item">${data.managerEmail}</li>
      <li class="list-group-item">${data.officeNumber}</li>
    </ul>
  </div>

  <div class="card" style="width: 18rem">
    <div class="card-header">Engineer</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>

  <div class="card" style="width: 18rem">
    <div class="card-header">Intern</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
        </body>
      </html>`;
    // };
    
  }
  
  module.exports = generateHTML;
  