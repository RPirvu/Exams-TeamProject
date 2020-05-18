import React,{useContext} from 'react';
import axios from 'axios';
import {Context} from '../../api/Context';
import Button from '@material-ui/core/Button';

const DeleteExam = ({id}) => {

    const { examData, examFilter } = useContext(Context);
    const [stateExam, setStateExam] = examData;
  

   const deleteExam = () => {
        axios.delete('http://localhost:3001/exams/' + id)
        .then(response => {
            refreshExams();
            window.location.reload();
        });
    }
    const refreshExams = async () => {
        await axios.get('http://localhost:3001/exams')
        .then(res => {
            setStateExam(res.data);
        });
    
    }
    return(
        <Button variant="outlined" color="primary"
        onClick={deleteExam}
        >
            Delete
        </Button>
    )
}

export default DeleteExam;

