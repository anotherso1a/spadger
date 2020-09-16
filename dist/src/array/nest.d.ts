declare type idType = keyof any | null;
interface TreeNode {
    id: idType;
}
export declare const nest: (items: TreeNode[], id?: string | number | symbol, link?: string | number | symbol) => TreeNode[];
export {};
