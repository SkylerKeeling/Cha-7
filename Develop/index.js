// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const {writeFile} = require("fs").promises
const generateREADME = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
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
      name: "usage",
      message: "How is your project used?",
    },
    {
      type: "input",
      name: "screenshot",
      message: "Provide link to a screenshot of your project",
    },
    {
      type: "input",
      name: "credits",
      message: "Provide the credits of your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Which license would you like?",
      choices: ["MIT", "Apache 2.0", "no license"],
    },
    {
      type: "input",
      name: "features",
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
      message: "Explain the tests used for the project:",
    },
    {
      type: "input",
      name: "personal",
      message: "Provide link to your github account:",
    },
  ])
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then(answers => writeFile("README2.md", generateREADME(answers)))
    .then(() => console.log("Successfully completed README file"))
    .catch(err => console.error(err))
}

// Function call to initialize app
init()

module.exports = questions
