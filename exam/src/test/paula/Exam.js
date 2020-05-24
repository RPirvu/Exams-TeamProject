import React,{useState} from 'react';
import DeleteExam from './button/DeleteExam';
import EditModal from './modals/EditModal';
import {Button} from '@material-ui/core';
import ExPanel from '../test/expanel/ExpansionPanel';
const Exam = ({subject, date, id,session,classroom,universityYear,studyYear,section,numberOfPlaces,teacher}) => {

    return(
        <div>
            {/* <h3>{subject}</h3>
            <p>{date}</p>
            <Button>
                    <EditModal id={id} sub={subject} da={date}/>
            </Button>
            
            <DeleteExam id={id}/> */}

            <ExPanel id = {id} subject={subject} date={date} session={session} classroom={classroom} universityYear={universityYear} studyYear={studyYear} section={section} numberOfPlaces={numberOfPlaces} teacher={teacher}/>
            {/* <EditModal id={id} sub={subject} da={date}/>
            <DeleteExam id={id}/>  */}
        </div>
    )
}

export default Exam;