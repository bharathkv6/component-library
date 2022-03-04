import { Tree } from '../../types/TreeView';
import TreeItem from '../TreeItem/TreeItem';
import '../../styles/TreeView/index.css';

const TreeView: React.FC<{ data: Tree }> = props => {
  const { data } = props;
  return (
    <ul className='treeview-container'>
      {data.map((treeItem, index) => {
        return (
          <TreeItem
            key={`${index}_${treeItem.label.replaceAll(' ', '_')}`}
            data={treeItem}
          />
        );
      })}
    </ul>
  );
};

export default TreeView;
