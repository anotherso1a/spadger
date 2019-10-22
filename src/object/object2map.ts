/**
 * @name object2map
 * @description 对象转map
 * @param obj 需要转换成map的对象
 * @returns {Map} 转换后的Map
 * @example
 * afl.object2map({
 *   a: 1,
 *   b: 2
 * }) //Map(2) {"a" => 1, "b" => 2}
 */
export function object2map(obj: Object): Map<any, any> {
  let map = new Map();
  Object.keys(obj).forEach(k => map.set(k, obj[k]));
  return map;
}
