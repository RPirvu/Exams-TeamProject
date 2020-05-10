import React, { Component } from 'react';
import {Table,Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label,Input} from 'reactstrap';
import axios from 'axios';
import Titles from './component/Titles';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            exams: [],
            filteredExams: [],
            newExamData: {
                subject: '',
                date: ''
            },
            searchData: {
                subject: ''
            },
            editExamData: {
                id: '',
                subject: '',
                date: ''
            },
            newExamModal: false,
            editExamModal: false
        };
    }

    componentDidMount() {
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
       this.setState({filteredExams: []})
    }

    editExam(id, subject, date){
        this.setState({
            editExamData: { id, subject, date },
            editExamModal: ! this.state.editExamModal
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
        this.setState({filteredExams: []})
    }
  
    deleteExam(id){
      axios.delete('http://localhost:3001/exams/' + id).then(response => {
          this._refreshExams();
      });
      this.setState({filteredExams: []})
    }
  
    _refreshExams(){
      axios.get('http://localhost:3001/exams').then(res => {
              this.setState({
                  exams: res.data
              });
          });
    };

    render() {
      let result;
      if (this.state.filteredExams.length !== 0) {
          result = this.state.filteredExams;
      } else {
          result = this.state.exams;
      }

      let exams = result.map(exam => {
        return (
          
            <tr key={exam.id} className="App">
                <td className="App">{exam.id}</td>
                <td className="App">{exam.subject}</td>
                <td className="App">{exam.date}</td>
                <td>
                    <Button
                        color="success"
                        size="sm"
                        className="mr-2"
                        onClick={this.editExam.bind(
                            this, exam.id, exam.subject, exam.date)}
                    >
                        Edit
                    </Button>{' '}
                    <Button 
                        color="danger" 
                        size="sm" 
                        onClick={() => this.deleteExam(exam.id)}
                    >
                        Delete
                    </Button>
                </td>
            </tr>
           
        );
    });
      return (
          <div className="App">
              <Titles/>
              <Button
                  className="my-3"
                  color="primary"
                  onClick={this.toggleNewExamModal.bind(this)}
              >
                  Add Exam
              </Button>{' '}
              <Button
                  className="my-3"
                  color="info"
                  onClick={e => {
                      this.state.exams.sort((a, b) => {
                          if (a.subject > b.subject) {
                              return 1;
                          } else if (a.subject < b.subject) {
                              return -1;
                          } else {
                              return 0;
                          }
                      });
                      this.setState({
                          filteredExams: this.state.exams
                      });
                  }}
              >
                  Sort by Subject ASC
              </Button>{' '}
              <Button
                  className="my-3"
                  color="info"
                  onClick={e => {
                      this.state.exams.sort((a, b) => {
                          if (a.subject > b.subject) {
                              return -1;
                          } else if (a.subject < b.subject) {
                              return 1;
                          } else {
                              return 0;
                          }
                      });
                      this.setState({
                          filteredExams: this.state.exams
                      });
                  }}
              >
                  Sort by Subject DESC
              </Button>{' '}
              
              <FormGroup>
                  <Input
                      type="search"
                      placeholder="Search for ..."
                      onChange={e => {
                          this.setState({
                              filteredExams: this.state.exams.filter(exam => {
                                  return exam.subject.indexOf(e.target.value) !== -1;
                              })
                          });
                      }}
                  />
              </FormGroup>
     
              <Modal isOpen={this.state.newExamModal} toggle={this.toggleNewExamModal.bind(this)}>
                  <ModalHeader toggle={this.toggleNewExamModal.bind(this)}>
                      Add a new exam
                  </ModalHeader>
                  <ModalBody>
                      <FormGroup>
                          <Label for="subject">Subject</Label>
                          <Input
                              id="subject"
                              value={this.state.newExamData.subject}
                              required="required"
                              onChange={e => {
                                  let { newExamData } = this.state;
                                  newExamData.subject = e.target.value;
                                  this.setState({ newExamData });
                              }}
                          />
                      </FormGroup>
                      <FormGroup>
                          <Label for="date">Date</Label>
                          <Input
                              id="date"
                              type="date"
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
                      <Button color="primary" onClick={this.addExam.bind(this)}>
                          Add Exam
                      </Button>{' '}
                      <Button color="secondary" onClick={this.toggleNewExamModal.bind(this)}>
                          Cancel
                      </Button>
                  </ModalFooter>
              </Modal>
              <Modal
                  isOpen={this.state.editExamModal}
                  toggle={this.toggleEditExamModal.bind(this)}
              >
                  <ModalHeader toggle={this.toggleEditExamModal.bind(this)}>
                      Edit a new exam
                  </ModalHeader>
                  <ModalBody>
                      <FormGroup>
                          <Label for="subject">Subject</Label>
                          <Input
                              id="subject"
                              value={this.state.editExamData.subject}
                              onChange={e => {
                                  let { editExamData } = this.state;
                                  editExamData.subject = e.target.value;
                                  this.setState({ editExamData });
                              }}
                          />
                      </FormGroup>
                      <FormGroup>
                          <Label for="date">Date</Label>
                          <Input
                              id="date"
                              type="date"
                              value={this.state.editExamData.date}
                              onChange={e => {
                                  let { editExamData } = this.state;
                                  editExamData.date = e.target.value;
                                  this.setState({ editExamData });
                              }}
                          />
                      </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                      <Button color="primary" onClick={this.updateExam.bind(this)}>
                          Update Exam
                      </Button>{' '}
                      <Button color="secondary" onClick={this.toggleEditExamModal.bind(this)}>
                          Cancel
                      </Button>
                  </ModalFooter>
              </Modal>
              <Table>
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Subject</th>
                          <th>Date</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {exams}

                  </tbody>
              </Table>
          </div>
      );
  }
}

export default App;