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
  test('can divide two positive numbers', () => {
    expected = 2;
    actual = divide(70, 35);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 3;
    actual = divide(90, 30);
    expect(actual).toBe(expected);
  });

  test('can divide one positive number and a negative number', () => {
    expected = -20;
    actual = divide(400, -20);
    expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(350, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can find the remainder of two positive numbers', () => {
    expected = 1;
    actual = modulus(16, 5);
    expect(actual).toBe(expected);
  });

  test('can find the remainder of two negative numbers', () => {
    expected = -2;
    actual = modulus(-26, -4);
    expect(actual).toBe(expected);
  });

  test('can find the remainder of a positive number and a negative number', () => {
    expected = 3;
    actual = modulus(33, -10);
    expect(actual).toBe(expected);
  });

  test('can find the remainder using zero', () => {
    expected = 0;
    actual = modulus(0, 300);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('is the positive number even', () => {
    expected = "is even";
    actual = even(12);
    expect(actual).toBe(expected);
  });

  test('is the negative number even', () => {
    expected = "is even";
    actual = even(-22);
    expect(actual).toBe(expected);
  });

  test('is zero even', () => {
    expected = "is even";
    actual = even(0);
    expect(actual).toBe(expected);
  });
  test('is the sum of two numbers even', () => {
    expected = "is not even";
    actual = even(sum(3, 2));
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  

});
