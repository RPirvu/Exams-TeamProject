import React from 'react';
import ExamList from './component/ExamList';
import './App.css';
import { ExamProvider } from './api/Context';
import AddModal from './component/modals/AddModal';

function App() {

  
  return (
    <ExamProvider>
      <div className="App">
      <h1>App Works</h1>
        <AddModal/>
        <ExamList/>
      </div>
    </ExamProvider>
  );
}

export default App;
