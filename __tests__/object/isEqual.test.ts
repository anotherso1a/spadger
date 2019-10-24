import { isEqual } from '../../src/object/isEqual';

test('isEqual', () => {
  expect(isEqual(1, 2)).toBe(false);
  expect(isEqual(1, 1)).toBe(true);
  expect(isEqual('a', 'a')).toBe(true);
  expect(isEqual('a', 'ab')).toBe(false);
  expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  expect(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 })).toBe(false);
  expect(isEqual([1, 2], [1, 2])).toBe(true);
  expect(isEqual([1, 2], [2, 3])).toBe(false);
  expect(isEqual(true, false)).toBe(false);
  expect(isEqual(false, false)).toBe(true);
  expect(isEqual(1, false)).toBe(false);
  expect(isEqual(0, false)).toBe(true);
});
