import { memorize } from '../../src/function/memorize';

test('memorize', () => {
  let fib = n => (n < 2 ? 1 : fib(n - 1) + fib(n - 2));
  fib = memorize(fib);
  expect(fib(70)).toBe(308061521170129);
});
