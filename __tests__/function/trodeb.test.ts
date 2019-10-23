import { throttle } from '../../src/function/throttle';
import { debounce } from '../../src/function/debounce';

test('throttle', () => {
  let count = { n: 0 };
  let fn: Function = count => count.n++;
  let throttled = throttle(fn, 50); //50ms执行一次
  return new Promise(resolve => {
    for (let i = 1; i <= 3; i++) {
      //延时40ms后每40ms执行一次方法,一共执行3次
      setTimeout(() => {
        throttled(count);
        if (i == 3) resolve();
      }, i * 40);
    }
  }).then(() => expect(count.n).toBe(2)); //函数会生效2次
});

test('debounce', () => {
  expect.assertions(1);
  let count = { n: 0 };
  let fn = debounce(() => count.n++, 20);
  let timer = setInterval(fn, 10);
  return new Promise(resolve => {
    setTimeout(() => {
      clearInterval(timer);
      setTimeout(() => {
        resolve();
      }, 30);
    }, 500);
  }).then(() => expect(count.n).toBe(1));
});
