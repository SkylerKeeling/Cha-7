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

// TODO: Create a function to write README file
const generateREADME = ({
  title,
  description,
  installation,
  usage,
  screenshot,
  credits,
  license,
  Badges,
  features,
  contribute,
  tests,
  personal,
}) =>
  `# ${title}

## Description 

${description}

## Installation 

${installation}

## Usage

${usage}

## Screenshot

![alt text](${screenshot})

## Credits

${credits}

## License

${license}
${renderLicenseBadge(license)}
<br>
${renderLicenseLink(license)}

## Badges

${Badges}

## Features

${features}

## How to contribute 

${contribute}

## Tests 

${tests}

## Personal

${personal}
`

module.exports = generateREADME
