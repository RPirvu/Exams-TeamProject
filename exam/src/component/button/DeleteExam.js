import React,{useContext} from 'react';
import axios from 'axios';
import {Context} from '../../api/Context';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import MyTheme from '../../component/MyTheme';
const DeleteExam = ({id}) => {

    const { examData, examFilter } = useContext(Context);
    const [stateExam, setStateExam] = examData;
  

   const deleteExam = () => {
        axios.delete('http://localhost:8800/exams/' + id)
        .then(response => {
            refreshExams();
            window.location.reload();
        });
    }
    const refreshExams = async () => {
        await axios.get('http://localhost:8800/exams')
        .then(res => {
            setStateExam(res.data);
        });
    
    }
    return(
        <Button variant="contained" style={MyTheme.palette.companyRed}
        startIcon={<DeleteIcon />}
        onClick={deleteExam}
        >
            Delete
        </Button>
    )
}

export default DeleteExam;

