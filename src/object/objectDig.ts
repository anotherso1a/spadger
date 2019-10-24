/**
 * @name objectDig
 * @description 从对象中找到特定key的值
 * @param {Object} obj
 * @param {string} target
 * @returns {*}
 * @example
 * sp.objectDig({a:{b:{c:{d:4}}}},'d') //4
 */
export function objectDig(obj: object, target: string): any {
  return target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return objectDig(val, target);
      }, undefined);
}
