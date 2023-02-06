function generateHTML(team) {
  // TODO: loop over team members and make cards

  const manager = team.filter((employee) => employee.getRole() === "Manager");

  const engineer = team.filter((employee) => employee.getRole() === "Engineer");

  const intern = team.filter((employee) => employee.getRole() === "Intern");
  const managerHtml = `
  <div>
  <h2>${manager[0].getRole()}</h2>
  <h3>${manager[0].getName()}</h3>
  <ul>
  <li>${manager[0].getId()}</li>
  <li>${manager[0].getEmail()}</li>
  <li>${manager[0].getSalary()}</li>
</ul>
  </div>
  `;
  const engineerHtml = `
  <div>
  <h2>${engineer[0].getRole()}</h2>
  <h3>${engineer[0].getName()}</h3>
  <ul>
  <li>${engineer[0].getId()}</li>
  <li>${engineer[0].getEmail()}</li>
  <li>${engineer[0].getGitHub()}</li>
</ul>
  </div>
  `;
  const internHtml = `
  <div>
  <h2>${intern[0].getRole()}</h2>
  <h3>${intern[0].getName()}</h3>
  <ul>
  <li>${intern[0].getId()}</li>
  <li>${intern[0].getEmail()}</li>
  <li>${intern[0].getSchool()}</li>
</ul>
  </div>
  `;
  // }
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${managerHtml}
  ${engineerHtml}
  ${internHtml}
</body>
</html>

`;
  // this code EXPORTS the generateMarkdown function outside of this file
}
module.exports = generateHTML;
