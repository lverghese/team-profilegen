const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

//creates engineer object
test('creates engineer object', () => {
    const engineer = new Engineer('Logan', 30, 'loganverghese@gmail.com', 'lverghese');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Logan', 30, 'loganverghese@gmail.com', 'lverghese')

    expect(engineer.getTheGit()).toEqual(expect.stringContaining(engineer.github.toString()));
}); 

test('gets main role', () => {
    const engineer = new Engineer('Logan', 30, 'loganverghese@gmail.com', 'lverghese');

    expect(engineer.getTheRole()).toEqual('Engineer');
})