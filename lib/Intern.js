const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email);
    if (role == "") {
      this.role = "Employee";
    } else {
      this.role = role;
    }
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    if (this.role == "") {
      return "Employee";
    } else {
      return this.role;
    }
  }
}
module.exports = Intern;
