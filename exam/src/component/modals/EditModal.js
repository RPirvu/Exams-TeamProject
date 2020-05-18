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

const EditModal = ({name, id, sub,da}) => {

  const { examData } = useContext(Context);
  const [ stateExam, setStateExam]  = examData;
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const[subject,setSubject] = useState('');
  const[date,setDate] = useState('');

  const updateSubject = (e) => {
    console.log("ETVL:",e.target.value.length)
    if(e.target.value.length != 0)
      setSubject(e.target.value);
  };

  const updateDate = (e) => {
    if(e.target.value.length != 0)
      setDate(e.target.value);
  };

  const updateExam = () => {
    axios
    .put('http://localhost:3001/exams/' + id,{ 
        subject,
        date}
    );
    window.location.reload();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
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
            label="subject"
            type="text"
            defaultValue={sub}
            onChange={updateSubject}
            fullWidth
            
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="date"
            type="date"
            defaultValue={da}
            onChange={updateDate}
            fullWidth
            
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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