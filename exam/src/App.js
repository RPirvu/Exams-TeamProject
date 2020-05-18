import React from 'react';
import ExamList from './component/ExamList';
import './App.css';
import { ExamProvider } from './api/Context';
import AddModal from './component/modals/AddModal';
import SearchInput from './component/SearchInput';

function App() {

  
  return (
    <ExamProvider>
      <div className="App">
      <h1>App Works</h1>
        <SearchInput/>
        <AddModal/>
        <ExamList/>
      </div>
    </ExamProvider>
  );
}

export default App;


