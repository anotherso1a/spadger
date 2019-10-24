/**
 * @name stringifyQuery
 * @description 将对象转换成search字符串(不带问号)
 * @param {Object} obj 要被转换成search字符串的对象
 * @returns {String} search字符串
 * @example
 * sp.stringifyQuery({a:1,b:2}) //a=1&b=2
 */
export function stringifyQuery(obj: object): string {
  return Object.keys(obj)
    .reduce((str, k) => `${str}&${k}=${encodeURIComponent(obj[k])}`, '')
    .slice(1);
}
