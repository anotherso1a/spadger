/**
 * @name isEqual
 * @description 比较两个对象是否值相等,深度为1
 * @param {any} o1 对象1
 * @param {any} o2 对象2
 * @returns {Boolean} 判断结果
 * @example
 * sp.isEqual(1,1) //true
 * sp.isEqual({a:1},{a:1}) //true
 * sp.isEqual('a','bc') //false
 */
export function isEqual(o1: any, o2: any): boolean {
  let props1 = Object.getOwnPropertyNames(o1);
  let props2 = Object.getOwnPropertyNames(o2);
  if (props1.length != props2.length) {
    return false;
  }
  if (!props1.length || !props2.length) {
    return o1 == o2;
  }
  for (let i = 0, max = props1.length; i < max; i++) {
    let propName = props1[i];
    if (o1[propName] !== o2[propName]) {
      return false;
    }
  }
  return true;
}
