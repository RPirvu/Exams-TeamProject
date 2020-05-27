import React,{useState,useContext} from 'react';
import {Context} from "../api/Context";
import Exam from "./Exam";
import Loader from "./Loader";

const ExamList = () => {

    const { examData, examFilter, loader } = useContext(Context);
    const [stateExam, setStateExam] = examData;
    const [stateDataFilter, setStateDataFilter] = examFilter;
    const [isLoading, setIsLoading ] = loader;
    
    
    
    let result;
    
   
    if (stateDataFilter.length !== 0) {
        result = stateDataFilter;   
    }
    else {
        result = stateExam;
        
        return(
            <div><h1>No results. </h1><br/> <h1>Please try another search term.</h1></div>
        )
    }
    if ( isLoading === true ) {
       return( 
        <Loader/>
       ) 
    }

   else{ 
    return(
            <div>
            {Array.isArray(result) && result.map((exam, index) => {
                return( 
                    <div>
                        <Exam
                            subject={exam.subject} 
                            date={exam.date} 
                            id={exam.id} 
                            session={exam.session} 
                            classroom={exam.classroom} 
                            universityYear={exam.universityYear}
                            studyYear={exam.studyYear}
                            section={exam.section}
                            numberOfPlaces={exam.numberOfPlaces} 
                            teacher={exam.teacher}
                            studentName={exam.studentName}
                            startHour={exam.startHour}
                        />
                    </div>
                    )
                })
            }
            </div> 
        )
    }
}
export default ExamList;


