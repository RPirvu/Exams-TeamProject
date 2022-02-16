import React from 'react';
import axios from 'axios';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

 export default class App extends React.Component {

    state = {
        exams: [],
        newExamData:{
          subject:'',
          date:''
        },
        editExamData:{
          id:'',
          subject:'',
          date:''
        },
        newExamModal : false,
        editExamModal :false,
      }
    
      componentWillMount() {
        this._refreshExams()
      }
    
      toggleNewExamModal(){
        this.setState({
          newExamModal : ! this.state.newExamModal
        });
      }
      toggleEditExamModal(){
        this.setState({
            editExamModal: ! this.state.editExamModal
        });
      }
    
      addExam() {
        axios.post('http://localhost:3001/exams',this.state.newExamData)
        .then((response) => {
            let { exams } = this.state;
            exams.push(response.data);
            this.setState({exams,newExamModal: false});
         });
        }
    
      updateExam() {
        let { subject, date } = this.state.editExamData;
        axios
            .put('http://localhost:3001/exams/' + this.state.editExamData.id, {
                subject,
                date
            })
            .then(response => {
                this.setState({editExamModal: false})
                this._refreshExams();
            });
        }
    
      editExam(id, subject, date){
        this.setState({
            editExamData: { id, subject, date },
            editExamModal: ! this.state.editExamModal
        });
         
      }
    
      deleteExam(id){
        axios.delete('http://localhost:3001/exams/' + id).then(response => {
            this._refreshExams();
        });
      }
    
      _refreshExams(){
        axios.get('http://localhost:3001/exams').then(res => {
                this.setState({
                    exams: res.data
                });
            });
      };
     render(){
         return(
            <ul>
            {this.state.exams.map((exam,index) => (
              
                <ExpansionPanel key={exam.id}>

                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> Exam: {exam.subject}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>                          
                        {exam.date }                      
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                <Button size="small" color="success"onClick={this.updateExam.bind(this)}>
                    Edit
                  </Button>
                  <Button size="small" color="danger"onClick={this.toggleEditExamModal.bind(this)}>
                    Delete
                  </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
            ))}

<Button 
          className="my-3" 
          color="primary" 
          onClick={this.toggleNewExamModal.bind(this)}>
            Add new Exam
        </Button>{' '}
        <Modal 
          isOpen={this.state.newExamModal} 
          toggle={this.toggleNewExamModal.bind(this)}>
            <ModalHeader toggle={this.toggleNewExamModal.bind(this)}>
                Add new Exam
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="subject">Subject</Label>
                    <Input
                        id="subject"
                        value={this.state.newExamData.subject}
                        onChange={e => {
                            let { newExamData } = this.state;
                            newExamData.subject = e.target.value;
                            this.setState({ newExamData });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date"> Date </Label>
                    <Input
                        id="date"
                        value={this.state.newExamData.date}
                        onChange={e => {
                            let { newExamData } = this.state;
                            newExamData.date = e.target.value;
                            this.setState({ newExamData });
                        }}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button  
                  color="primary" 
                  onClick={this.addExam.bind(this)}> 
                    Add Exam
                </Button>{' '}
                <Button 
                  color="secondary" 
                  onClick={this.toggleNewExamModal.bind(this)}> 
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
           
        </ul>
         )
     }
 }