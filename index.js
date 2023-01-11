const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");

const employees = [];

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { profile } = require("console");

let isTeamComplete = false;


const validateInput = (userInput) => {
    if (userInput === '') {
     return 'Answer is required.';
    }else{
        return true;
    }
};


const init = async () => {
    await createManager();

    while(!isTeamComplete) {
        const employeeQuestion = [
        {
         type: 'list',
         message: 'Select the employee you would like to add:',
         name: 'EmployeeType'
         choices: [
            {name:'Engineer', value:'engineer',short:'Engineer'},
            {name:'Intern', value:'intern',short:'Intern'},
            {name:'None', value:'none',short:'None'},
            
         ],
            

            },
        ];
const {employeeType} = await inquirer.prompt(employeeQuestion);

if (employeeType === 'none') {
    isTeamComplete = true;
}else{
    if (employeeType === 'engineer') {
        await createEngineer();
    }
    if (employeeType === 'intern') {
        await createIntern();
    }

}
}

const HTML = generateHTML(employees);
fs.writeFileSync('team-profile.html', HTML, (err) => {
    if (err) {
        console.log(err);

    }else{
        console.log('HTML created!');

    }
  });
};

    const createManager = async () => {
    const managerQuestions = [
        {
            type: 'input',
            message: 'Please enter Manager name:',
            name:'name',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Please enter the employee ID:',
            name:'id',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'Please enter the office number:',
            name:'officeNumber',
            validate: validateInput, 
        },
        {
            type: 'input',
            message: 'Please enter the email:',
            name:'email',
            validate: validateInput,
        },
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerAnswers);

 employees.push(manager);
};








// function writeFile(data) {
//     fs.writeFile('index.html', generateHTML(data), (err) =>
//     err ? console.log(err) : console.log('Gnerated HTML!')
//     )};

// function init() {
//     inquirer
//     .prompt(employees)
// .then((response) => {
//     writeFile(response)

// })
// }

// init();
