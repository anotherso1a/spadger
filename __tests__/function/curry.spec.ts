import { curry } from '../../src/function/curry';

test('curry', () => {
  let sum: Function = (a, b, c) => a + b + c;
  let curried = curry(sum);
  expect(curried(1, 2, 3)).toBe(6);
  expect(curried(1, 2)(3)).toBe(6);
  expect(curried(1)(2)(3)).toBe(6);
  expect(curried(1)(2, 3)).toBe(6);
});
