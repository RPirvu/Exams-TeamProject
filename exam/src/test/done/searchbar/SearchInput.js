import React,{useState,useContext} from 'react';
import {Context} from '../api/Context';

export const SearchInput = () => {
   
    // const [ exams,setExams ] = useContext(Context)
    // const [ search, setSearch ] = useContext(Context)
    // const [ dataFiltered,setDataFiltered ] = useContext(Context)
    
    const { examData, examFilter } = useContext(Context);
    const [stateExam, setStateExam] = examData;
    const [stateDataFilter, setStateDataFilter] = examFilter;

    let data = stateExam;
    const updateFilter = (value) => {
        
        setStateDataFilter(data.filter(exam => {
            return exam.subject.indexOf(value) !== -1;
        }))
        console.log("DATA",data)    
    }
    
    const onInputChange = (event)  => {
       
        updateFilter(event.target.value);
        event.preventDefault();
        // console.log("DF",stateDataFilter);
        // console.log("EX",stateExam)
        
    }
    
    return (
        <div >
            <input
                type='text'
                placeholder='Search for...'
                onChange={onInputChange.bind(this)}
            />
        </div>
    );
    
}

export default SearchInput;

