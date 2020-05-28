import React,{useState,createContext,useEffect} from 'react';
import axios from 'axios';

export const Context = createContext();

export const ExamProvider = (props) => {

    const [ exams,setExams ] = useState({});
    const [ dataFiltered,setDataFiltered ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const refreshExams = async () =>{
        await axios.get('http://localhost:8800/exams')
        .then(res => {
            if (res.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ', res.status);
                return;
            }
            setLoading(false);
            setExams(res.data);
            setDataFiltered(res.data)
        });
        
    }
    
    useEffect( () => {
        refreshExams();
    },[])


    return(
        
        <Context.Provider value={{examData:[exams,setExams], examFilter: [dataFiltered, setDataFiltered], loader:[ loading, setLoading]}}>
            {props.children}
        </Context.Provider>
        
    );

}


 