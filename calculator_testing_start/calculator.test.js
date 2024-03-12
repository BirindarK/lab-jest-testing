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

  test('can subtract two very small numbers', () => {
    expected = 3e-9;
    actual = subtract(6e-9, 3e-9);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 60;
    actual = subtract(60, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    expected = 60;
    actual = multiply(30, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 75;
    actual = multiply(-25, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply one positive number and one negative number', () => {
    expected = -90;
    actual = multiply(30, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(40, 0);
    expect(actual).toBe(expected);
  });


});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
