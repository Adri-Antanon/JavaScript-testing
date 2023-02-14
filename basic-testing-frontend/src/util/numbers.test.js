import { describe, expect, it } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('tranformToNumber()', () => {
  it('should transform a string number to a number of type number - typeof', () => {
    const input = '2';

    const result = transformToNumber(input);

    expect(result).toBeTypeOf('number');
  });

  it('should transform a string number to a number of type number -  value', () => {
    const input = '2';

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it('should yield NaN for non-transformale values', () => {
    const input = 'test';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumber()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf('number');
    expect(cleanedNumbers[0]).toEqual([1, 2]); // toBe()
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', '1'];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
