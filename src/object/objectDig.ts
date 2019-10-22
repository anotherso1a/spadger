/**
 * @export
 * @param {Object} obj
 * @param {string} target
 * @returns {*}
 */
export function objectDig(obj: Object, target: string): any {
  return target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return objectDig(val, target);
      }, undefined);
}
