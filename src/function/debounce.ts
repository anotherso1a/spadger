/**
 *
 * @name debounce
 * @description 防抖函数(连续触发时 保证只执行一次，过了delay时间后，才会再次触发
 * @param {Function} fn 需要防抖的方法
 * @param {Number} delay 单位:ms,防抖间隔
 * @param {Boolean} isPostposition 是否后置执行(当停止操作 delay ms 后执行,如果设为 true, 则触发时立即执行,后续 delay ms 内连续触发不执行)
 * @returns {Function} 被防抖后的函数
 * @example
 * let debounced = sp.debounce(()=>console.log("scroll")), 500, true)
 * window.onScroll = debounced; //滚动停止后500ms才会执行
 */
export function debounce(
  fn: Function,
  wait: number,
  isPostposition: boolean = true
) {
  let timeout: any = null;
  return isPostposition
    ? function(...args: Array<any>): void {
        //后置执行
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, args);
        }, wait);
      }
    : function(...args: Array<any>): void {
        //前置执行
        timeout ? clearTimeout(timeout) : fn.apply(this, args);
        timeout = setTimeout(() => (timeout = null), wait);
      };
}
