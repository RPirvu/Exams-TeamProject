import React,{useState} from 'react';
import DeleteExam from './DeleteExam';
import EditModal from './modals/EditModal';
import {Button} from '@material-ui/core';
const Exam = ({subject, date,id}) => {

    return(
        <div>
            <h3>{subject}</h3>
            <p>{date}</p>
            <Button>
                    <EditModal id={id} subject={subject} date={date}/>
            </Button>
            
            <DeleteExam id={id}/>
        </div>
    )
}

export default Exam;