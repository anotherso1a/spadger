/**
 * 节流函数(连续触发时第一次立即触发,之后每 delay ms 执行一次)
 * @param {Function} fn 需要节流的方法
 * @param {Number} delay 单位:ms,每次执行函数的间隔
 */
export function throttle(fn: Function, delay: Number = 500): Function {
  let last: number = Date.now(); //绑定时时间
  return function(...args: Array<any>) {
    if (Date.now() - last > delay) {
      //两次执行间隔大于delay
      last = Date.now(); //执行方法,刷新最后调用时间
      return fn.apply(this, args);
    }
  };
}
