import React,{useState,useContext} from 'react';
import {Context} from "../api/Context";
import Exam from "./Exam";
import Loader from "./Loader";
const ExamList = () => {
    // get Context 
    const { examData, examFilter, loader } = useContext(Context);
    const [stateExam, setStateExam] = examData;
    const [stateDataFilter, setStateDataFilter] = examFilter;
    const [isLoading, setIsLoading ] = loader;
    
    
    let result;

    return(
        <div className="some-container">
            {
            (() => {
                // loading screen
                if ( isLoading === true ) {
                    return( 
                        <Loader/>
                    )} 
                //set result
                if (stateDataFilter.length !== 0)
                    result = stateDataFilter; 
                if (stateDataFilter.length == 0){
                    result = stateExam;
                }
                //DB empty error
                if ((result === stateExam) && (result.length === 0)) {
                    return(
                        <div><h1>No results.</h1><br/> <h1>Data Base must be empty. </h1>
                        <img src='https://i.ya-webdesign.com/images/chrome-dinosaur-png-2.png' alt="Dino" width="15%" height = "15%"/>
                        </div>
                        )
                }
                //No result error
                if (Object.entries(stateDataFilter).length === 0){
                    return(<div><h1>No results. </h1><br/> <h1>Please try another search term.</h1>
                    <img src='https://i.redd.it/7ab0ginypjl31.png' alt="Dino" width="15%" height = "15%"/>
                        </div>)
                }
                
                //Normal return
                else{ 
                    return(
                            <div>
                                {/* <div>
                                    <img src='https://images.fineartamerica.com/images/artworkimages/medium/2/zero-two-reo-anime-transparent.png' alt="Dino" width="15%" height = "15%"  align='left' margin="none"/>
                                </div>
                                <div>
                                <img src='https://i.pinimg.com/originals/33/fb/7b/33fb7b953c5f533229067491a1f67715.png' alt="Dino" width="15%" height = "15%"  align='right' />
                                 
                                </div>  */}
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
                                })}
                                
                            </div> 
                        )
                    }
            })()
            }
        </div>
    )
}
export default ExamList;


