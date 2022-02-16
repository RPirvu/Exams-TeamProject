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
const updateteacher = (e) => {
  setteacher(e.target.value);
};

  const addExam = (e) => {
      axios.post('http://localhost:3001/exams',{subject , date,session,classroom,universityYear,studyYear,section,numberOfPlaces,teacher})
      .then((response) => {
          const exam = {subject: subject,date: date,session:session,classroom:classroom,universityYear:universityYear,studyYear:studyYear,section:section,numberOfPlaces:numberOfPlaces,teacher:teacher};
          const newExams = [...stateExam,exam];
          setStateExam(newExams);
      });
      setOpen(false);
      refreshExams()
      
  }
  const refreshExams = async () => {
    await axios.get('http://localhost:3001/exams')
    .then(res => {
        setStateExam(res.data);
    });
    window.location.reload();
  }
  const sesiuni = [
    'vara', 'iarna'
]


  return (
    <div>
      <Button variant="outlined" color="White" onClick={handleClickOpen}>
       <AddIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a New Exam</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="subject"
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
          <Select 
          
          autoFocus
          margin="dense"
          id="session"
          type="session"
          label="Session"
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
            label="classroom"
            type="text"
            onChange={updateClassroom}
            fullWidth
            
          />
           <TextField
            autoFocus
            margin="dense"
            id="universityYear"
            label="universityYear"
            type="text"
            onChange={updateuniversitYear}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="studyYear"
            label="studyYear"
            type="text"
            onChange={updatestudyYear}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="section"
            label="section"
            type="text"
            onChange={updatesection}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="numberOfPlaces"
            label="numberOfPlaces"
            type="text"
            onChange={updatenumbeOfPlaces}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="teacher"
            label="teacher"
            type="text"
            onChange={updateteacher}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addExam} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;