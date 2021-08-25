const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, uni) {
        //calls employee
        super (name, id, email);

        this.uni = uni;

    }

    getTheSchool() {
        return this.uni
    }

    getTheRole() {
        return 'Intern'
    }
}

module.exports = Intern;