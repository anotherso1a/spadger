import { reactive } from '../index';

test('reactive', () => {
  let a = { b: 1, arr: [], o: { c: 1 } };
  let count = 0;
  let timer = null;
  return new Promise(resolve => {
    let reactived = reactive(a, function() {
      count++;
      clearTimeout(timer);
      timer = setTimeout(() => resolve(count), 0);
    });
    reactived.b = 100;
    reactived.arr.push(1, 2, 3);
    reactived.o.c = 1000;
  }).then(() => {
    expect(a.b).toBe(100);
    expect(a.arr).toEqual([1, 2, 3]);
    expect(a.o).toEqual({ c: 1000 });
    expect(a.o.c).toBe(1000);
    expect(count).toBe(1);
  });
});
