import React from 'react';
import axios from 'axios';
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField} from '@material-ui/core';

export default class Edit extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            
            editExamData: {
                id: '',
                subject: '',
                date: '',
            },
            open:false,
        };
    };
    handleClickOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    editExam(id, subject, date){
        this.setState({
            editExamData: { id, subject, date },
            // editExamModal: ! this.state.editExamModal
        });
        
    }
    
    updateExam() {
        let { subject, date } = this.state.editExamData;
        axios
        .put('http://localhost:3001/exams/' + this.state.editExamData.id,{ 
            subject,
            date}
        );
        //     .then(response => {
        //         // this.setState({editExamModal: false})
        //         this.refreshExams();
        //     });
        // //   this.setState({filteredExams: []})
        window.location.reload();
    };

    refreshExams(){
        axios.get('http://localhost:3001/exams').then(res => {
                this.setState({
                    exams: res.data
                });
            });
      };

    render(){
        return(
            <div>
                <Button variant="outlined" color="primary" onClick={() =>{
                    this.handleClickOpen();
                    this.editExam.bind(
                        this, this.props.id, this.props.subject, this.props.date)
                
                }}

                    >
                    Edit
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose.bind(this,this.state.open)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="subject"
                        label="subject"
                        type="text"
                        value={this.state.editExamData.subject}
                        onChange={e => {
                            let { editExamData } = this.state;
                            editExamData.subject = e.target.value;
                            this.setState({ editExamData });
                        }}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="date"
                        type="date"          
                        value={this.state.editExamData.date}
                        onChange={e => {
                            let { editExamData } = this.state;
                            editExamData.date = e.target.value;
                            this.setState({ editExamData });
                        }}
                        fullWidth
                        
                    />
                    
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose.bind(this,this.state.open)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.updateExam.bind(this)} color="primary">
                        Save
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}