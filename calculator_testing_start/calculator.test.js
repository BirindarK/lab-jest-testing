const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => {
    expected = 3e9;
    actual = sum(1e9, 2e9);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -450;
    actual = sum(-250, -200);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 50;
    actual = sum(50, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two positive numbers', () => {
    expected = 50;
    actual = subtract(100, 50);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 5;
    actual = subtract(-30, -35);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 60;
    actual = subtract(60, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
