import React,{useState,createContext,useEffect} from 'react';
import axios from 'axios';

export const Context = createContext();

export const ExamProvider = (props) => {

    const [ exams,setExams ] = useState({});
    const [ search, setSearch ] = useState([]);
    const [ dataFiltered,setDataFiltered ] = useState({});

    const refreshExams = async () =>{
        await axios.get('http://localhost:3001/exams')
        .then(res => {
            setExams(res.data);
            setDataFiltered(res.data)
        });
    }
    
    useEffect( () => {
        refreshExams();
    },[])


    return(
        
        <Context.Provider value={{examData:[exams,setExams], examFilter: [dataFiltered, setDataFiltered]}}>
            {props.children}
        </Context.Provider>
        
    );

}


 