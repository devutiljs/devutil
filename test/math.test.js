const DevUtil = require('../src/devutil');

test('Factorial', () => {
    expect(DevUtil.factorial(0)).toBe(1);
    expect(DevUtil.factorial(3)).toBe(6);
});

test('Area of a triangle on three sides', () => {
    expect(DevUtil.triangleAreaThreeSides(0, 1, 2)).toBe(0);
    expect(DevUtil.triangleAreaThreeSides(1, 0, 2)).toBe(0);
    expect(DevUtil.triangleAreaThreeSides(1, 2, 0)).toBe(0);

    expect(DevUtil.triangleAreaThreeSides(2, 2, 3)).toBe(1.984313483298443);
});

test('Convert kilometers to miles', () => {
    expect(DevUtil.kilometersToMiles(-1)).toBe(0);
    expect(DevUtil.kilometersToMiles(0)).toBe(0);
    expect(DevUtil.kilometersToMiles(10)).toBe(6.21371);
});

test('Check if a number is odd', () => {
    expect(DevUtil.isOdd(1)).toBe(true);
    expect(DevUtil.isOdd(2)).toBe(false);
});

test('Check if a number is even', () => {
    expect(DevUtil.isEven(1)).toBe(false);
    expect(DevUtil.isEven(2)).toBe(true);
});