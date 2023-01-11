const Employee = require('./Employee');
class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email);
    if (role == '') {
      this.role = 'Employee';
    } else {
      this.role = role;
    }
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    if (this.role == '') {
      return 'Employee';
    } else {
      return this.role;
    }
  }
}

module.exports = Manager;