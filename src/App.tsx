import React from 'react';
import './App.css';
import TreeView from './components/TreeView/TreeView';
import { treeViewData } from './data/TreeView';

function App() {
  return (
    <div className="App">
      <TreeView data={treeViewData} />
    </div>
  );
}

export default App;
