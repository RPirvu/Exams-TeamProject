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
import  {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import MyTheme from '../../component/MyTheme';
const EditModal = ({Esubject, Edate, id,Esession,Eclassroom,Eteacher,EuniversityYear,EstudyYear,Esection,EnumberOfPlaces, EstudentName,EstartHour}) => {

  const { examData, examFilter } = useContext(Context);
  const [stateExam, setStateExam] = examData;


  const[subject,setSubject] = useState(Esubject);
  const[date,setDate] = useState(Edate);
  const[session,setSession]=useState(Esession);
  const[classroom,setClassroom]=useState(Eclassroom);
  const[universityYear,setuniverstYear]=useState(EuniversityYear);
  const[studyYear,setstudyYear]=useState(EstudyYear);
  const[section,setsection]=useState(Esection);
  const[numberOfPlaces,setnumberOfPlaces]=useState(EnumberOfPlaces);
  const[teacher,setteacher]=useState(Eteacher);
  const[studentName,setStudentName]=useState(EstudentName);
  const[startHour,setStartHour]=useState(EstartHour);
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateSubject = (e) => {
    
      setSubject(e.target.value);
  };

  const updateDate = (e) => {
    
      setDate(e.target.value);
  }; 
  const updateStartHour = (e) => {
    
    setStartHour(e.target.value);
  };


const updateSession = (e)=> {
  setSession(e.target.value);
}
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
const updateteacher = (e) => {
setteacher(e.target.value);
};
const updateStudentName = (e) => {
  setStudentName(e.target.value);
  };

  const updateExam = () => {
    axios
    .put('http://localhost:3001/exams/' + id,{ 
      subject ,date, startHour,session,classroom,universityYear,studyYear,section,numberOfPlaces,teacher,studentName}
    );
    console.log(subject,date);
    refreshExams();
  };

  const refreshExams = async () => {
    await axios.get('http://localhost:3001/exams')
    .then(res => {
        setStateExam(res.data);
    });
    window.location.reload();
  }
  const sesiuni = [
     'Winter','Summer','Autumn'
  ]

  

  return (
    <div>
       
      <Button variant="contained" style={MyTheme.palette.companyRed} onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Exam</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            defaultValue={subject}
            onChange={updateSubject}
            fullWidth
            
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            type="date"
            defaultValue={date}
            onChange={updateDate}
            fullWidth
            />
            
            <TextField
            autoFocus
            margin="dense"
            id="time"
            type="time"
            defaultValue={startHour}
            onChange={updateStartHour}
            fullWidth
            />
          
          <Select 
          
          autoFocus
          margin="dense"
          id="session"
          type="session"
          label="Session"
          defaultValue={session}
          onChange={updateSession}
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
            defaultValue={classroom}
            onChange={updateClassroom}
            fullWidth
            
          />
           <TextField
            autoFocus
            margin="dense"
            id="universityYear"
            label="University Year"
            type="text"
            defaultValue={universityYear}
            onChange={updateuniversitYear}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="studyYear"
            label="Study Year"
            type="text"
            defaultValue={studyYear}
            onChange={updatestudyYear}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="section"
            label="Section"
            type="text"
            defaultValue={section}
            onChange={updatesection}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="numberOfPlaces"
            label="Seats available"
            type="text"
            defaultValue={numberOfPlaces}
            onChange={updatenumbeOfPlaces}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="teacher"
            label="Teacher"
            type="text"
            defaultValue={teacher}
            onChange={updateteacher}
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="studentName"
            label="Updated By"
            type="text"
            defaultValue={studentName}
            onChange={updateStudentName}
            fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="green">
            Cancel
          </Button>
          <Button onClick={updateExam} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}

export default EditModal;