import { describe, expect, it } from 'vitest';

import { transformToNumber } from './numbers';

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
