const Employee = require('./Employee');
class Engineer extends Employee {
  constructor(name, id, email, role, github) {
   super(name, id, email);
    if (role == '') {
      this.role = 'Employee';
    } else {
      this.role = role;
    }
      this.github = github;
  }

  
  getGithub() {
    return `https://github.com/${this.github}`;
  }

  
  getRole() {
    
    if (this.role == '') {
      return 'Employee';
    } else {
      
      return this.role;
    }
  }
}






module.exports = Engineer;