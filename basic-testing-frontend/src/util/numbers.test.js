import { expect, it } from 'vitest';

import { transformToNumber } from './numbers';

it('should transform a string number to a number of type number', () => {
  const input = '2';

  const result = transformToNumber(input);

  const expectedResult = +input;
  expect(result).toBeTypeOf('number');
});

it('should yield NaN for non-transformale values', () => {
  const input = 'test';

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});

// it('should return nothing if we dont pass any argument', () => {
//   const input = '';

//   const result = transformToNumber(input);

//   expect(result).toBeNaN();
// });
