const index = require("./index");
const Engineer = require("./utils/engineer");
const Manager = require("./utils/manager");
const Intern = require("./utils/intern");
const { default: ListPrompt } = require("inquirer/lib/prompts/list");
const HTML = [];

const generateHTML = (data) => {
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
        <h1 class="text-center">My Team</h1>
     <div class="team-cards row">   
    
    ${generateManager(data)}
    ${generateEngineer(data)}
    ${generateIntern(data)}
   
    </div>       
    </body>
    </html>
      `;
};

const generateManager = (data) => {
  return data.map((member) => {
    if (member.getRole() === "Manager") {
      return `<div class="col-sm-4">
      <div class="card" style="width: 18rem">
           <div class="card-header">Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">${member.name}</li>
            <li class="list-group-item">${member.id}</li>
            <li class="list-group-item"><a href="mailto: ${member.email}">${member.email}</a></li>
               <li class="list-group-item">${member.officeNumber}</li>
          </ul>
        </div>
        </div>`;

    }

    
  });

};

const generateEngineer = (data) => {
  return data.map((member) => {
    console.log("member", member.getRole());
    if (member.getRole() === "Engineer") {
      return `<div class="col-sm-4">
      <div class="card" style="width: 18rem">
           <div class="card-header">Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">${member.name}</li>
            <li class="list-group-item">${member.id}</li>
            <li class="list-group-item"><a href="mailto: ${member.email}">${member.email}</a></li>
               <li class="list-group-item"><a href="http://www.github.com/${member.gitHub}">${member.gitHub}</a></li>
          </ul>
        </div>
        </div>`;
    }

    
  });
};

const generateIntern = (data) => {
  return data.map((member) => {
    if (member.getRole() === "Intern") {
      return `<div class="col-sm-4">
      <div class="card" style="width: 18rem">
           <div class="card-header">Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">${member.name}</li>
            <li class="list-group-item">${member.id}</li>
            <li class="list-group-item"><a href="mailto: ${member.email}">${member.email}</a></li>
               <li class="list-group-item">${member.school}</li>
          </ul>
        </div>
        </div>`;
    }
    
  });
};


module.exports = generateHTML;
