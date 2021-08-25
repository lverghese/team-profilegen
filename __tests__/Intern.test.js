const Intern = require('../lib/Intern');

//creates intern object
test('creates intern object', () => {
    const intern = new Intern('Logan', 30, 'loganverghese@gmail.com', 'UCF');

    expect(intern.uni).toEqual(expect.any(String));
});

test('gets interns school', () => {
    const intern = new Intern('Logan', 30, 'loganverghese@gmail.com', 'UCF')

    expect(intern.getTheSchool()).toEqual(expect.stringContaining(engineer.uni.toString()));
}); 

test('gets main role', () => {
    const intern = new Intern('Logan', 30, 'loganverghese@gmail.com', 'UCF');

    expect(intern.getTheRole()).toEqual('Intern');
})