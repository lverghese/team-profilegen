class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    getTheName () {
        return this.name;
    }

    getTheId () {
        return this.id;
    }

    getTheEmail () {
        return this.email;
    }

    getTheRole () {
        return 'Employee';
    }


};

//to get exported in other files
module.exports = Employee;