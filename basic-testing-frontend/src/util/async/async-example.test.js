import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (error) {
      done(error);
    }
  });
});

it('should generate a token value without done param', () => {
  const testUserEmail = 'test@test.com';
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value without done param - async await', async () => {
  const testUserEmail = 'test@test.com';
  const token = await generateTokenPromise(testUserEmail);
  //   expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  expect(token).toBeDefined();
});
