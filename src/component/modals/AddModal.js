import React,{useState,useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import {Context} from '../../api/Context';
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import AddIcon from '@material-ui/icons/Add';
import MyTheme from '../../component/MyTheme';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear'
import { makeStyles, rgbToHex } from '@material-ui/core/styles';

const Modal = () => {

  const [open, setOpen] = React.useState(false);
  const { examData, examFilter } = useContext(Context);
  const [stateExam, setStateExam] = examData;
  const [stateDataFilter, setStateDataFilter] = examFilter;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const[subject,setSubject] = useState('');
  const[date,setDate] = useState('');
  const[session,setSession]=useState('');
  const[classroom,setClassroom]=useState('');
  const[universityYear,setuniverstYear]=useState('');
  const[studyYear,setstudyYear]=useState('');
  const[section,setsection]=useState('');
  const[numberOfPlaces,setnumberOfPlaces]=useState('');
  const[teacher,setteacher]=useState('');
  const[studentName,setStudentName]=useState('');
  const[startHour,setStartHour]=useState('');

  const updateSubject = (e) => {
      setSubject(e.target.value);
  };
  const updateSession = (e)=> {
    setSession(e.target.value);
  }

  const updateDate = (e) => {
      setDate(e.target.value);
  };
  const updateClassroom = (e) => {
    setClassroom(e.target.value);
  };
  const updateuniversitYear = (e) => {
    setuniverstYear(e.target.value);
  };
  const updatestudyYear = (e) => {
    setstudyYear(e.target.value);
  };
  const updatesection = (e) => {
    setsection(e.target.value);
  };
  const updatenumbeOfPlaces = (e) => {
    setnumberOfPlaces(e.target.value);
  };
  const updateStudentName = (e) => {
    setStudentName(e.target.value);
  };
  const updateStartHour = (e) => {
    setStartHour(e.target.value);
  };
  const updateteacher = (e) => {
    setteacher(e.target.value);
  };

  const addExam = (e) => {
      axios.post('http://localhost:8800/exams',{subject ,date, startHour,session,classroom,universityYear,studyYear,section,numberOfPlaces,teacher,studentName})
      .then((response) => {
          const exam = {subject:subject, date:date, session:session, classroom:classroom, universityYear:universityYear, studyYear:studyYear,
             section:section, numberOfPlaces:numberOfPlaces, teacher:teacher, studentName:studentName, startHour:startHour};
          const newExams = [...stateExam,exam];
          setStateExam(newExams);
      });
      setOpen(false);
      refreshExams()
      
  }
  const refreshExams = async () => {
    await axios.get('http://localhost:8800/exams')
    .then(res => {
        setStateExam(res.data);
    });
    window.location.reload();
  }
  const sesiuni = [
    'Winter','Summer','Autumn'
  ]
  const useStyles = makeStyles((theme) => ({
    open: {
      backgroundColor: '#333',
      color: 'rgb(250,250,250)',
      margin: '0'
    },  
  }));
  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
       <AddIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.open}>Add a New Exam</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            onChange={updateSubject}
            fullWidth
            
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="date" 
            type="date"
            onChange={updateDate}
            fullWidth
            
          />
          <div>
            
            <TextField
            autoFocus
            margin="dense"
            id="time" 
            type="time"
            onChange={updateStartHour}
            fullWidth
            
          />
          
          </div>
         
          <Select 
          
          autoFocus
          margin="none"
          id="session"
          type="Session"
          label="Session"
          onChange={updateSession}
          display="flex"
          fullWidth
          
          >{sesiuni.map((sessions) => (
            <MenuItem key={sessions} value={sessions}>
              {sessions}
            </MenuItem>
          ))}
             </Select>  
           <TextField
            autoFocus
            margin="dense"
            id="classroom"
            label="Classroom"
            type="text"
            onChange={updateClassroom}
            fullWidth
            
          />
           <TextField
            autoFocus
            margin="dense"
            id="universityYear"
            label="University Year"
            type="text"
            onChange={updateuniversitYear}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="studyYear"
            label="Study Year"
            type="text"
            onChange={updatestudyYear}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="section"
            label="Section"
            type="text"
            onChange={updatesection}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="numberOfPlaces"
            label="Seats Available"
            type="text"
            onChange={updatenumbeOfPlaces}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="teacher"
            label="Teacher"
            type="text"
            onChange={updateteacher}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="student"
            label="Added By"
            type="text"
            onChange={updateStudentName}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
           
          <Button onClick={handleClose} variant="contained" style={MyTheme.palette.companyRed}
            startIcon={<ClearIcon />}  >
            Cancel
          </Button> 
         
         <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          
          <Button onClick={addExam} variant="contained" style={MyTheme.palette.companyBlue}
          startIcon={<SaveIcon />}>
            Save
          </Button> 
           
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;