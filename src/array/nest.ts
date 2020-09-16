/**
 * @name nest
 * @description 数组转树,必须带有id属性,并且拥有一个类似parent_id能指向父级id的键
 * @param {Array} items 被转化的数组
 * @param {String|Number} id 父节点的id值
 * @param {String} link 链接父节点id的属性key
 * @returns {Object} 树形对象
 * @example
 * let items = [
 *    { id: 1, parent_id: null },
 *    { id: 2, parent_id: 1 },
 *    { id: 3, parent_id: 2 },
 *    { id: 4, parent_id: 1 },
 * ]
 * nest(items,null,'parent_id')
 */

type idType = keyof any | null;
interface TreeNode {
  id: idType;
}
export const nest = (
  items: TreeNode[],
  id: idType = null,
  link: keyof any = 'parent_id'
): TreeNode[] =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id, link) }));
