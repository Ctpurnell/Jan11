const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");

const employees = [
  { type: "input", name: "managerName", message: "Managers Name?" },

  { type: "input", name: "managerID", message: "Managers ID?" },

  { type: "input", name: "mnagerEmail", message: "Managers email?" },
];

function writeFile(data) {
    fs.writeFile('index.html', generateHTML(data), (err) =>
    err ? console.log(err) : console.log('Gnerated HTML!')
    )};

function init() {
    inquirer
    .prompt(employees)
.then((response) => {
    writeFile(response)

})
}

init();
