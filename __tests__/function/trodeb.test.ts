import { throttle } from '../../src/function/throttle';
// import {  debounce} from "../../src/function/debounce";

test('throttle', () => {
  let count: Number = 0;
  let fn = n => n++;
  let throttled = throttle(fn, 20);
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      throttled(count);
      expect(count).toBe(i + 1);
    }, i * 21);
  }
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      throttled(count);
      expect(count).toBe(1);
    }, i * 9);
  }
});
