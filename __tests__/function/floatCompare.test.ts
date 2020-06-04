import { floatCompare } from '../../src/function/floatCompare';

test('floatCompare', () => {
  expect(floatCompare(0.3, 0.1 + 0.2)).toBe(true);
  expect(floatCompare(0.3, 0.3)).toBe(true);
  expect(floatCompare(0.1, 0.2)).toBe(false);
  expect(floatCompare(Number.EPSILON, 0)).toBe(true);
});
