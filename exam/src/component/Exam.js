import React,{useState} from 'react';
import DeleteExam from './DeleteExam';

const Exam = ({subject, date,id}) => {

    return(
        <div>
            <h3>{subject}</h3>
            <p>{date}</p>
            <button>Edit</button>
            <DeleteExam id={id}/>
        </div>
    )
}

export default Exam;