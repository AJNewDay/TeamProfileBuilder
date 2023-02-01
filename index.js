const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const name = "name";
const id = 3;
const email = "mail";
const gitHub = "that";
const salary = "$$$";
const school = "CGNU";
let html = "index.html";
const myEngineer = new Engineer(name, id, email, gitHub);
const myManager = new Manager(name, id, email, salary);
const myIntern = new Intern(name, id, email, school);
console.log(myEngineer);
console.log(myManager);
console.log(myIntern);

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
      // fs.writeFile("index.html", generateMarkdown(answers));
      let result = generateHTML(answers);
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
