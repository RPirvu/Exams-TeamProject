import React,{useState,useContext} from 'react';
import {Context} from '../../api/Context';
import {FormGroup, Input} from '@material-ui/core';
import ExamList from '../../component/ExamList';
export const SearchBar = () => {

    const [ filteredExam, setFilteredExam ] = useContext(Context);
    const [ exams, setExams ] = useContext(Context);

    const updateFilter = (e) => {
        setFilteredExam(exams.filter(exam => {
            return exam.subject.indexOf(e.target.value) !== -1;
        }))
        console.log("val",e.target.value)
        
    }
    
    
    return(
        <div>
        <FormGroup>
                  <Input
                      type="search"
                      placeholder="Search for ..."
                      onChange={updateFilter}
                  />
        </FormGroup>
        <ExamList filtered={filteredExam}/>
        </div>
    )
}
export default SearchBar;
