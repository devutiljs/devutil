const DevUtil = require('../src/devutil');

test('Variable is defined', () => {
    expect(DevUtil.isDefined("value")).toBe(true);
    expect(DevUtil.isDefined(null)).toBe(false);
    expect(DevUtil.isDefined(undefined)).toBe(false);
});

test('Variable is undefined', () => {
    expect(DevUtil.isUndefined("value")).toBe(false);
    expect(DevUtil.isUndefined(null)).toBe(true);
    expect(DevUtil.isUndefined(undefined)).toBe(true);
});

test('Variable is true', () => {
    expect(DevUtil.isTrue(true)).toBe(true);
    expect(DevUtil.isTrue(false)).toBe(false);
    expect(DevUtil.isTrue(1)).toBe(false);
});

test('Variable is false', () => {
    expect(DevUtil.isFalse(false)).toBe(true);
    expect(DevUtil.isFalse(true)).toBe(false);
    expect(DevUtil.isFalse(1)).toBe(false);
});