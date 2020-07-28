import { chunk } from '../../src/array/chunk';

test('chunk', () => {
  expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
  expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
});
