/**
 *
 * @name floatCompare
 * @description 用于比较浮点数的大小
 * @param {Number} a 浮点数A
 * @param {Number} b 浮点数B
 * @returns {Boolean} 两数是否相等
 * @example
 * sp.floatCompare(0.3, 0.1+0.2) // true
 */
export function floatCompare(a: number, b: number): boolean {
  return Math.abs(a - b) <= Number.EPSILON;
}
