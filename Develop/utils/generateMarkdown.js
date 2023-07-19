const index = require("../index.js")
const fs = require("fs")
const inquirer = require("inquirer")
const questions = require("../index.js")

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if (license == "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license == "Apache 2.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "no license") {
    badge = ""
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""
  if (license == "MIT") {
    licenseLink = "https://www.mit.edu/~amini/LICENSE.md"
  } else if (license == "Apache 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.txt"
  } else if (license == "no license") {
    licenseLink = ""
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT" || "Apache 2.0") {
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`
}

module.exports = generateMarkdown
