/**
 * @name memorize
 * @description 缓存函数,被缓存的函数执行后会将参数对应的结果进行缓存
 * @param {Function} fn
 * @returns {Memorized} 接受(?string|number|boolean)参数,返回任意值
 * @example
 * let fib = n => n<2 ? 1 : fib(n-1) + fib(n-2)
 * //不做缓存直接调用会导致浏览器卡死
 * fib = sp.memorize(fib)
 * fib(1000) //7.0330367711422765e+208
 */

type Memorized = (para?: string | number | boolean) => any;

export const memorize = (fn: Function): Memorized => {
  const cache = new Map();
  const cached: Memorized = function(arg) {
    return cache.has(arg)
      ? cache.get(arg)
      : cache.set(arg, fn.call(this, arg)) && cache.get(arg);
  };
  return cached;
};
