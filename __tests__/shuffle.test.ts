import { shuffle } from '../src/demo';

test('shuffle [1,2,3,4] will returns a array with length 4', () => {
  expect(shuffle([1, 2, 3, 4]).length).toBe(4);
});
