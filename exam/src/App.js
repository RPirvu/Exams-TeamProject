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
      {/* <h1>App Works</h1> */}
        <SearchInputB/>
        {/* <AddModal/> */}
        <ExamList/>
      </div>
    </ExamProvider>
  );
}

export default App;


