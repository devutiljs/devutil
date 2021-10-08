const DevUtil = require('../dist/devutil');

test('Factorial', () => {
    expect(DevUtil.factorial(0)).toBe(1);
    expect(DevUtil.factorial(3)).toBe(6);
});