import { objectDig } from '../../src/object/objectDig';

test('dig in object, find the value you want', () => {
  const t = {a:{b:{c:{d:4}}}}
  //通常 你需要 t.a.b.c.d
  //现在 你可以 objectDig(t,"d")
  expect(objectDig(t,"d")).toBe(4);
});