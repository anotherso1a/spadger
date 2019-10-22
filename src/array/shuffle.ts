/**
 * 数组洗牌,返回顺序随机的新数组(浅拷贝)
 * @param {Array} arr 需要洗牌的数组,纯数字
 */
export function shuffle([...arr]: Array<number>): Array<number> {
  arr = arr.slice();
  let i: number = arr.length;
  while (i) {
    let j: number = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}
