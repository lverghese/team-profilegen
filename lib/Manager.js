const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, office) {
        //calls employee
        super (name, id, email);

        this.office = office;

    }

    //this is the override
    getTheRole() {
        return 'Manager'
    }
}

module.exports = Manager;