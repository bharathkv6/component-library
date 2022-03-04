import { Tree } from '../../types/TreeView';

export const treeViewData: Tree = [
  {
    label: 'Applications',
    children: [
      {
        label: 'Calendar'
      }
    ]
  },
  {
    label: 'Documents',
    children: [
      {
        label: 'OSS'
      },
      {
        label: 'MUI',
        children: [
          {
            label: 'index.js'
          }
        ]
      }
    ]
  }
];
