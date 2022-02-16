import React from 'react';
import ExamList from './component/ExamList';
import './App.css';
import { ExamProvider } from './api/Context';
import SearchInputB from './component/SearchInputB';

function App() {

  
  return (

    <ExamProvider>
      <div className="App">
        <div className="app_header">
        <SearchInputB/>
        </div>
        <ExamList classname="App-list"/>
      </div>
    </ExamProvider>
  );
}

export default App;


