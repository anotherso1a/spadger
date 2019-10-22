/**
 * 对象转map
 * @param obj 需要转换成map的对象
 */
export function object2map(obj: Object): Map<any, any> {
  let map = new Map();
  Object.keys(obj).forEach(k => map.set(k, obj[k]));
  return map;
}
