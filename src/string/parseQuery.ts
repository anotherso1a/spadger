/**
 * 将链接search转换为对象,可以用原生api: URLSearchParams
 * @returns {Object} 参数对象
 */
export function parseQuery(str: String = location.search.slice(1)) {
  return str.split('&').reduce((o, s) => {
    let [k, v] = s.split('=');
    o[k] = decodeURIComponent(v);
    return o;
  }, {});
}
