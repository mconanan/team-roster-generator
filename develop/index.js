// importing necessary files
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./generateHTML.js");
const async = require("async");
const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");
const teamRoster = [];

console.log(generateHTML());
// array of questions for inquirer
const questions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
    default: "Manager",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "managerId",
    default: "Manager ID",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "managerEmail",
    default: "Manager email",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "officeNumber",
    default: "",
  },
];

const nextMember = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "None"],
    name: "teamMember",
    default: "Team Member",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineerName",
    default: "Engineer Name",
  },
  {
    type: "input",
    message: "What is the engineer's ID?",
    name: "engineerId",
    default: "Engineer ID",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "engineerEmail",
    default: "Engineer Email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "engineerGithub",
    default: "Engineer GitHub",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "internName",
    default: "Intern Name",
  },
  {
    type: "input",
    message: "What is the intern's ID?",
    name: "internId",
    default: "Intern ID",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "internEmail",
    default: "Intern Email",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "internSchool",
    default: "Intern School",
  },
];

//  function to initialize inquirer and ask questions about the manager
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("manager answers", answers);
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );
    teamRoster.push(manager);
    console.log("team roster", teamRoster);
    nextMemberPrompt();
  });
}

// function to answer the "which team member would you like to add" question and populate questions based on answer
const nextMemberPrompt = () => {
  return inquirer.prompt(nextMember).then((chosenMember) => {
    switch (chosenMember.teamMember) {
      case "Engineer":
        renderEngineer();
        break;
      case "Intern":
        renderIntern();
        break;
      default:
        
        // function to join the "generated.html" file into the working directory
        const HTML = generateHTML(teamRoster);
        fs.writeFileSync("generated.html", generateHTML(teamRoster));
        console.log(`Here is your team! ${teamRoster}`);
        console.log(HTML);
    }
  });
};

const renderEngineer = () => {
  return inquirer.prompt(engineerQuestions).then((answers) => {
    console.log("engineer answers", answers);
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    teamRoster.push(engineer);
    console.log("team roster", teamRoster);
    nextMemberPrompt();
  });
};

const renderIntern = () => {
  return inquirer.prompt(internQuestions).then((answers) => {
    console.log("intern answers", answers);
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );

    teamRoster.push(intern);
    console.log("team roster", teamRoster);
    nextMemberPrompt();
  });
};

console.log("team roster", teamRoster);

// function renderTeam(teamRoster) {

// };

init();
