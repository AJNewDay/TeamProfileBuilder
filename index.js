const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const name = "";
const id = 0;
const email = "";
const gitHub = "";
const salary = "";
const school = "";
let html = "index.html";

const questions = [
  {
    type: "input",
    name: "manName",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "manId",
    message: "What is the manager's id?",
  },
  {
    type: "input",
    name: "manEmail",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "manSalary",
    message: "What is the manager's salary?",
  },
  {
    type: "input",
    name: "engName",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "engId",
    message: "What is the engineer's Id?",
  },
  {
    type: "input",
    name: "engEmail",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "engGitHub",
    message: "What is the engineer's GitHub?",
  },
  {
    type: "input",
    name: "intName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "intId",
    message: "What is the intern's Id?",
  },
  {
    type: "input",
    name: "intEmail",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "intSchool",
    message: "What is the intern's school?",
  },
];

function init() {
  // here we start our logic/code

  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      console.log(answers.manName);
      console.log(answers.manId);
      console.log(answers.manEmail);
      console.log(answers.manSalary);
      console.log(answers.engName);
      console.log(answers.engId);
      console.log(answers.engEmail);
      console.log(answers.engGitHub);
      console.log(answers.intName);
      console.log(answers.intId);
      console.log(answers.intEmail);
      console.log(answers.intSchool);
      const myEngineer = new Engineer(
        answers.engName,
        answers.engId,
        answers.engEmail,
        answers.engGitHub
      );
      const myManager = new Manager(
        answers.manName,
        answers.manId,
        answers.manEmail,
        answers.manSalary
      );
      const myIntern = new Intern(
        answers.intName,
        answers.intId,
        answers.intEmail,
        answers.intSchool
      );
      const team = [];
      team.push(myManager);
      team.push(myEngineer);
      team.push(myIntern);

      // fs.writeFile("index.html", generateHTML(answers));
      let result = generateHTML(team);
      fs.writeFile(html, result, (err) => {
        if (err) {
          console.log(err);
        }
      });
      // IF we need data from the prompt method continue our code inside of this functions scope
      // we can declare global variable and then update the value
      // we can PASS the variables/data to another function --> writeToFile("filename", data)

      // we can write the rest of our code inbetween the { SCOPE }
    })
    .catch((error) => {
      console.log(error);
    });

  // console.log("I am content AFTER the async function");
}
// Function call to initialize app
init();
