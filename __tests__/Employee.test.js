const Employee = require('../lib/Employee')

//need to create the employee object
test('creates an employee object', () => {
    const employee = new Employee('Logan', 30, 'loganverghese@gmail.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});


test('gets the employees name', () => {
    const employee = new Employee('Logan', 30, 'loganverghese@gmail.com')

    expect(employee.getTheName()).toEqual(expect.any(String))
})

test('gets the employees ID', () => {
    const employee = new Employee('Logan', 30, 'loganverghese@gmail.com')

    expect(employee.getTheId()).toEqual(expect.any(Number))
})

test('gets the employees email', () => {
    const employee = new Employee('Logan', 30, 'loganverghese@gmail.com')

    expect(employee.getTheEmail()).toEqual(expect.any(String))
})