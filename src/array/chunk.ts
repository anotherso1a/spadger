/**
 * @name chunk
 * @description 将数组按大小分片,返回新数组
 * @param {Array} arr 要分片的数组
 * @param {Number} size 分片大小
 * @returns {Array} 分片后的数组
 * @example
 * sp.chunk([1,2,3]) //[[1],[2],[3]]
 * sp.chunk([1,2,3,4,5],2) //[[1,2],[3,4],[5]]
 * sp.chunk([1,2,3,4],5) //[[1,2,3,4]]
 */
type ChunkedArray = Array<Array<any>>;
export const chunk = (arr: Array<any>, size: number = 1): ChunkedArray => {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
