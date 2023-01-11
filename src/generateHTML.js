const fs = require('fs');
const path = require('path');
const templatesDir = path.resolve(__dirname, '../templates');
const generateHTML = (employees) => {
    const HTML =[];

HTML.push(
    employees
    .filter((employee) => employee.getRole() === 'Manager')
    .map((manager) => renderManager(manager))
);
HTML.push(
    employees
    .filter((employee) => employee.getRole() === 'Engineer')
    .map((engineer) => renderManager(engineer))
);
HTML.push(
    employees
    .filter((employee) => employee.getRole() === 'Intern')
    .map((intern) => renderManager(intern))
);

return renderFullMarkdown(HTML.join(''));
};

const renderManager = (manager) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, 'manager.html'),
        'utf8'
    );

    template = replaceTemplates(template, 'name', manager.getName());
    template = replaceTemplates(template, 'id', manager.getId());
    template = replaceTemplates(template, 'role', manager.getRole());
    template = replaceTemplates(template, 'email', manager.getEmail());
    template = replaceTemplates(template, 'officeNumber', manager.getOfficeNumber());

    return template;
};

const renderEngineer = (engineer) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, 'engineer.html'),
        'utf8'
    );

    template = replaceTemplates(template, 'name', manager.getName());
    template = replaceTemplates(template, 'id', manager.getId());
    template = replaceTemplates(template, 'role', manager.getRole());
    template = replaceTemplates(template, 'email', manager.getEmail());
    template = replaceTemplates(template, 'github', manager.getGithub());

    return template;
};

const renderIntern= (intern) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, 'intern.html'),
        'utf8'
    );

    template = replaceTemplates(template, 'name', manager.getName());
    template = replaceTemplates(template, 'id', manager.getId());
    template = replaceTemplates(template, 'role', manager.getRole());
    template = replaceTemplates(template, 'email', manager.getEmail());

    return template;
};





