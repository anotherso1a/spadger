/**
 * @name throttle
 * @description 节流函数(连续触发时第一次立即触发,之后每 delay ms 执行一次)
 * @param {Function} fn 需要节流的方法
 * @param {Number} delay 单位:ms,每次执行函数的间隔
 * @returns {Function} 被节流后的函数
 * @example
 * let count = {n:0}
 * let thottled = spadger.throttle(count=> ++count.n,500)
 * setTimeout(()=>{
 *  for(let i = 0; i < 10 ; i++){
 *     thottled(count)
 *  }
 *  console.log(count.n)//1
 * },1000)
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
