/**
 * @name deepClone
 * @description 深拷贝
 * @param {object} obj 需要拷贝的对象
 * @returns {object} 深拷贝过后的对象
 * @example
 * a = { a:"A",b:[1,2,3,4,5] };
 * a.c = a;
 *
 * copy = sp.deepClone(a);
 *
 * copy === a //false
 * copy.a === a.a //true
 * copy.b === a.b //false
 */
export function deepClone(obj: any, cache = []): object {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const has = cache.filter(c => c.orignal === obj)[0];
  if (has) {
    return has.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  cache.push({
    orignal: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key], cache);
  });
  return copy;
}
