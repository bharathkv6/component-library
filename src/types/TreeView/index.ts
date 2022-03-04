export interface TreeNode {
  label: string;
  children?: TreeNode[]
}

export type Tree = TreeNode[];