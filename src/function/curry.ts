/**
 * @name curry
 * @description 函数柯里化
 * @param {Function} fn 需要被柯里化的函数
 * @returns {Function} 返回柯里化后的函数
 * @example
 * let fn = (a,b,c)=>a+b+c
 * let curried = sp.curry(fn)
 * curried(1,2,3) //6
 * curried(1)(2)(3) //6
 * curried(1,2)(3) //6
 */
export const curry = (fn: Function): Function => {
  const len = fn.length;
  const judge = (...args1: Array<any>): any =>
    args1.length >= len
      ? fn(...args1)
      : (...args2) => judge(...[...args1, ...args2]);
  return judge;
};
