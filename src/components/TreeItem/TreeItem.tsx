import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { TreeNode } from '../../types/TreeView/index';
import '../../styles/TreeView/index.css';

const TreeItem: React.FC<{ data: TreeNode }> = props => {
  const [state, setState] = useState(false);
  const {
    data: { label, children }
  } = props;

  const toggleTreeItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    setState(prevState => !prevState);
  };

  return (
    <li className="tree-item">
      <div className='tree-item__container' onClick={children?.length ? toggleTreeItem : undefined}>
        <div className='tree-item__icon-container'>
          {children?.length &&
            (state ? (
              <ExpandLessIcon></ExpandLessIcon>
            ) : (
              <ExpandMoreIcon></ExpandMoreIcon>
            ))}
        </div>
        <div className='tree-item__label-container'>{label}</div>
      </div>
      {state && (
        <ul className="treeview-container">
          {children?.map((treeItem: TreeNode, index: number) => {
            return (
              <TreeItem
                key={`${index}_${treeItem.label.replaceAll(' ', '_')}`}
                data={treeItem}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default TreeItem;
