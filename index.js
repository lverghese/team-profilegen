const fs = require('fs');
const inquirer = require('inquirer');


//profiles
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//need an array to hold the team
const arrayForTeam = [];

const newManager = () => {
        return inquirer.prompt([
            {
            type: "input",
            name: 'name',
            message: 'Who is the manager of this team?', 
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                        console.log ("Please enter the manager's name.");
                        return false; 
                    }
                }
            },
            {
            type: "input",
            name: 'id',
            message: "What is the manager's id number?", 
                validate: idInput => {
                    if (isNaN(idInput)) {
                        console.log ("Please enter the manager's valid ID.");
                        return false; 
                    } else {
                       return true;
                    }
                }
            },
            {
            type: "input",
            name: 'email',
            message: "What is the manager's email?", 
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                        console.log ("Please enter the manager's valid email.");
                        return false; 
                    }
                }
            },
            {
            type: "input",
            name: 'office',
            message: "What is the manager's office number?", 
                validate: officeInput => {
                    if (isNaN(officeInput)) {
                        console.log ("Please enter the manager's office number.");
                        return false; 
                    } else {
                        return true;
                    }
                }
            }



        ])
    .then(managerInput => {
        const {name, id, email, office} = managerInput;
        const manager = new Manager (name, id, email, office);

        //pushes this new manager input to the array
        arrayForTeam.push(manager);
    })
};


const newEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: "input",
            name: 'name',
            message: 'What is the name of your employee?', 
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                        console.log ("Please enter the employee's name.");
                        return false; 
                    }
                }
        },
        {
            type: "input",
            name: 'id',
            message: "What is the employee's id number?", 
                validate: idInput => {
                    if (isNaN(idInput)) {
                        console.log ("Please enter the employee's valid ID.");
                        return false; 
                    } else {
                       return true;
                    }
                }
        },
        {
            type: "input",
            name: 'email',
            message: "What is the employee's email?", 
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                        console.log ("Please enter the manager's valid email.");
                        return false; 
                    }
                }
            },
            {
            type: "input",
            name: 'github',
            message: "What is the employee's github username?", 
                validate: gitInput => {
                    if (gitInput) {
                      return true;
                    } else {
                        console.log ("Please enter the employee's valid github username.");
                        return false; 
                    }
                }
            },
            {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            //only adds school if it is an intern
            when: (input) => input.role === "Intern",
            validate: uniInput => {
                if (uniInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
            

    ])
}
