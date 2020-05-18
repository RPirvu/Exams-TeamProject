import React,{useContext} from 'react';
import axios from 'axios';
import {Context} from '../api/Context';

const DeleteExam = ({id}) => {

   const[exams,setExams]=useContext(Context);

   const deleteExam = () => {
        axios.delete('http://localhost:3001/exams/' + id)
        .then(response => {
            refreshExams();
        });
    }
    const refreshExams = async () => {
        await axios.get('http://localhost:3001/exams')
        .then(res => {
            setExams(res.data);
        });
    
    }
    return(
        <button 
        onClick={deleteExam}
        >
            Delete
        </button>
    )
}

export default DeleteExam;

