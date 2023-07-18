// TODO: Include packages needed for this application
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
// const questions = []
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is your project used?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Provide link to a screenshot of your project",
  },
  {
    type: "input",
    name: "Credits",
    message: "Provide the credits of your project:",
  },
  {
    type: "input",
    name: "License",
    message: "Which license would you like for your project?",
  },
  {
    type: "input",
    name: "Badges",
    message: "Which Badge would you like for your project?",
  },
  {
    type: "input",
    name: "Features",
    message: "Your project includes what features?",
  },
  {
    type: "input",
    name: "contribute",
    message: "Explain to others how they can contribute to your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Explain the tests used for the project",
  },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()
