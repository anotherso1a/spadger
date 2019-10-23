/**
 *
 * @name debounce
 * @description 防抖函数(连续触发时 保证只执行一次，过了delay时间后，才会再次触发
 * @param {Function} fn 需要防抖的方法
 * @param {Number} delay 单位:ms,防抖间隔
 * @returns {Function} 被防抖后的函数
 * @example
 * let debounced = spdebounce(()=>console.log("scroll")),500)
 * window.onScroll = debounced; //滚动停止后才会执行
 */
export function debounce(fn: Function, wait: number) {
  var timeout: any = null;
  return (...args: Array<any>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.call(this, args);
    }, wait);
  };
}
