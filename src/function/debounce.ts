/**
 *
 * @name debounce
 * @description 防抖函数(连续触发时 保证只触发一次，过了delay时间后，才会再次触发
 * @param {Function} fn 需要防抖的方法
 * @param {Number} delay 单位:ms,防抖间隔
 * @returns {Function} 被防抖后的函数
 * @example
 * let thottled = spadger.debounce(()=>console.log("scroll")),500)
 * window.onScroll = thottled;
 */
export function debounce(fn: Function, delay: number): Function {
  let timer, context, args;
  let startTimeStamp: number = 0;
  function run(wait) {
    timer = setTimeout(() => {
      let now = new Date().getTime();
      let goaway = now - startTimeStamp;
      if (goaway < wait) {
        startTimeStamp = now;
        run(wait - goaway);
      } else {
        fn.apply(context, args);
        clearTimeout(timer);
        timer = null;
      }
    }, wait);
  }
  return function() {
    context = this;
    args = arguments;
    let now = new Date().getTime();
    startTimeStamp = now;

    if (!timer) {
      run(delay);
    }
  };
}
