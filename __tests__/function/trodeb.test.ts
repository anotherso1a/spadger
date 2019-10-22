import { throttle } from '../../src/function/throttle';
// import {  debounce} from "../../src/function/debounce";

test('throttle', () => {
  let count1: Number = 0;
  let count2: Number = 0;
  let fn:Function = n => n++;
  let throttled = throttle(fn, 20);
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      throttled(count1);
      expect(count1).toBe(i + 1);
    }, i * 21);
  }
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      throttled(count2);
      expect(count2).toBe(1);
    }, i * 9);
  }
});
