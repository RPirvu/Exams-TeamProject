import React from 'react';
import ExamList from './component/ExamList';
import './App.css';
import { ExamProvider } from './api/Context';
import AddModal from './component/modals/AddModal';
import SearchInputB from './component/SearchInputB';

function App() {

  
  return (
    <ExamProvider>
      <div className="App">
        <SearchInputB/>
        <ExamList/>
      </div>
    </ExamProvider>
  );
}

export default App;


