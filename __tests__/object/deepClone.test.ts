import { deepClone } from '../../src/object/deepClone';

test('deepClone', () => {

  let a : any = { a:"A",b:[1,2,3,4,5] };
  a.c = a;
  let copy : any = deepClone(a);

  expect(copy===a).toBe(false);
  expect(copy.a===a.a).toBe(true);
  expect(copy.b===a.b).toBe(false);

});
