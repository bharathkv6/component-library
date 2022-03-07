import React from 'react';
import './App.css';
import TreeView from './components/TreeView/TreeView';
import { treeViewData } from './data/TreeView';
import { commentsData } from './data/Comments';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Tree View</h2>
        <TreeView data={treeViewData} />
      </div>
      <div>
        <h2>Comments Section</h2>
        <Comments data={commentsData} />
      </div>
    </div>
  );
}

export default App;
