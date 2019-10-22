/**
 * @name parseQuery
 * @description 将链接search转换为对象,可以用原生api: URLSearchParams
 * @param {String} str search字符串,不包含?
 * @returns {Object} 参数对象
 * @example
 * afl.parseQuery('a=1&b=2') //{a: "1", b: "2"}
 */
export function parseQuery(str: String = location.search.slice(1)) {
  return str.split('&').reduce((o, s) => {
    let [k, v] = s.split('=');
    o[k] = decodeURIComponent(v);
    return o;
  }, {});
}
