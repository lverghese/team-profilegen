const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calls employee
        super (name, id, email);

        this.github = github;

    }

    getTheGit() {
        return this.github
    }

    getTheRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;