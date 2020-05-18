import React from 'react';
import ExamList from './component/ExamList';
import './App.css';
import { ExamProvider } from './api/Context';
import AddModal from './component/modals/AddModal';
import SearchInput from './component/SearchInput';
import Header from './test/Header'
function App() {

  
  return (
    
    <ExamProvider>
      <Header/>
      <div className="App">
        <AddModal/>
        <ExamList/>
      </div>
    </ExamProvider>
  );
}

export default App;


