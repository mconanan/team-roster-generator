function generateHTML(data) {
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
      <h1>My Team</h1>
      <div class="card" style="width: 18rem">
        <div class="card-header">Manager</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data.managerName}</li>
          <li class="list-group-item">${data.managerId}</li>
          <li class="list-group-item">${data.managerEmail}</li>
          <li class="list-group-item">${data.managerNumber}</li>
        </ul>
      </div>
    
      <div class="card" style="width: 18rem">
        <div class="card-header">Engineer</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data.engineerName}</li>
          <li class="list-group-item">${data.engineerId}</li>
          <li class="list-group-item">${data.engineerGithub}</li>
        </ul>
      </div>
    
      <div class="card" style="width: 18rem">
        <div class="card-header">Intern</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data.internName}</li>
          <li class="list-group-item">${data.internId}</li>
          <li class="list-group-item">${data.internEmail}</li>
          <li class="list-group-item">${data.internSchool}</li>
        </ul>
      </div>
      <body></body>
    </html>
    
  `;
  }
  
  module.exports = generateHTML;
  