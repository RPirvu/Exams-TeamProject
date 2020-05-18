import React,{useState,useContext} from 'react';
import {Context} from "../api/Context";
import Exam from "./Exam";

const ExamList = () => {

    const { examData, examFilter } = useContext(Context);
    const [stateExam, setStateExam] = examData;
    const [stateDataFilter, setStateDataFilter] = examFilter;

    let result;
    if (stateDataFilter.length !== 0) {
        result = stateDataFilter;
    }
    else {
        result = stateExam;
    }
 
    return(
        <div>
           {Array.isArray(result) && result.map((exam, index) => {
                return( 
                    <div>
                        <Exam subject={exam.subject} date={exam.date} id={exam.id} session={exam.session} classroom={exam.classroom} universityYear={exam.universityYear} studyYear={exam.studyYear} section={exam.section} numberOfPlaces={exam.numberOfPlaces} teacher={exam.teacher}/>    
                    </div>
                    )
                })
            }
        </div> 
    )
    
}
export default ExamList;


