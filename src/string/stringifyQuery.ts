/**
 * @name stringifyQuery
 * @description 将对象转换成search字符串(不带问号)
 * @param {Object} obj 要被转换成search字符串的对象
 * @returns {String} search字符串
 * @example
 * spadger.stringifyQuery({a:1,b:2}) //a=1&b=2
 */
export function stringifyQuery(obj: Object): String {
  return Object.keys(obj)
    .reduce((str, k) => `${str}&${k}=${encodeURIComponent(obj[k])}`, '')
    .slice(1);
}
