import React from 'react';
import ExamList from './component/ExamList';
import './App.css';
import { ExamProvider } from './api/Context';
import AddExam from './component/AddExam';
import Modal from './test/Modal';
import AddExamTEST from './test/AddExamTEST';

function App() {

  
  return (
    <ExamProvider>
      <div className="App">
      <h1>App Works</h1>
        <AddExamTEST/>
        <ExamList/>
      </div>
    </ExamProvider>
  );
}

export default App;
