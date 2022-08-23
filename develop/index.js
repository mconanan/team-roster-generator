// importing necessary files
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./generateHTML");
const async = require("async");
const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");
const teamRoster = [];

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
    name: "managerNumber",
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
      answers.name,
      answers.id,
      answers.email,
      answers.gitHub
    );
    teamRoster.push(manager);
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
        renderTeam();
    }
  });
};

const renderEngineer = () => {
  return inquirer.prompt(engineerQuestions).then((answers) => {
    console.log("engineer answers", answers);
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    teamRoster.push(engineer);
    nextMemberPrompt();
  });
};

const renderIntern = () => {
  return inquirer.prompt(internQuestions).then((answers) => {
    console.log("intern answers", answers);
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    teamRoster.push(intern);
    nextMemberPrompt();
  });
};

const renderTeam = () => {
    console.log('YOUR TEAM', answers);

      
    // function to join the "generated.html" file into the working directory
    function writeToFile(fileName, answers) {
    fs.writeFileSync(path.join(process.cwd(), fileName), answers);
    
    writeToFile("generated.html", generateHTML);
  }
}

init();

// the function that takes the answers and writes them to the generateHTML function, which then places them into the generated.html file
// .then((answers) => { console.log('answers', answers);
//         writeToFile("generated.html", generateHTML           (answers)) });
