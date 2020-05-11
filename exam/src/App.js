import React from 'react';
import ExamList from './component/ExamList';
import './App.css';
import { ExamProvider } from './api/Context';
import AddExam from './component/AddExam';

function App() {

  
  return (
    <ExamProvider>
      <div className="App">
      <h1>App Works</h1>
        <AddExam/>
        <ExamList/>
      </div>
    </ExamProvider>
  );
}

export default App;
