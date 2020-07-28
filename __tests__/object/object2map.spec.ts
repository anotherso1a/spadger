import { object2map } from '../../src/object/object2map';

test('object2map {a:1,b:2} will returns a Map', () => {
  expect(object2map({ a: 1, b: 2 }).size).toBe(2);
});
