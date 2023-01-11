const Employee = require('./Employee');

class Intern extends Employee {
    constructor ({name, email, id}) {
        super({name, email, id});
        this.role = 'Intern';
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;