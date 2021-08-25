const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Logan', 30, 'loganverghese@gmail.com', 7);

    expect(manager.office).toEqual(expect.any(Number));
});

test('gets main role', () => {
    const manager = new Manager('Logan', 30, 'loganverghese@gmail.com', 7);

    expect(manager.getTheRole()).toEqual('Manager')
})