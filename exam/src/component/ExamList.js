import React,{useState,useContext} from 'react';
import {Context} from "../api/Context";
import Exam from "./Exam";
const ExamList = () => {

    const [exams,setExams] = useContext(Context);
    return(
        <div>
            {Array.isArray(exams) && exams.map((exam, index) =>{
                return( 
                    <div>
                        <Exam subject={exam.subject} date={exam.date} id={exam.id}/>
                    </div>
                )
            })}
        </div>
    );
    
}
export default ExamList;