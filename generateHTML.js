function generateHTML(team) {
  // TODO: loop over team members and make cards
  for (i = 0; i < team.length; i++) {
    console.log(team[i]);
  }
  const manager = team.filter((employee) => employee.getRole() === "Manager");
  return `# ${answers.title}
  ## License:
  ![license](https://img.shields.io/badge/license-${answers.license}-blue.svg)


  ## Table of Contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Issues](#issues)
  - [Contributions](#contributions)
  - [License](#license)
 
## Usage
${answers.usage}
## Installation
${answers.installation}
## Issues
${answers.issues}
## Contributions
${answers.contributions}
## License
${answers.license}
`;
}

// this code EXPORTS the generateMarkdown function outside of this file
module.exports = generateHTML;
