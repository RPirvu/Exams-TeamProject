import React,{useState,useContext} from 'react';
import axios from 'axios';
import {Context} from '../../api/Context';
const AddExam = () => {
    const[exams,setExams]=useContext(Context);

    const editExam = (id, subject, date) => {
        this.setState({
            editExamData: { id, subject, date },
            editExamModal: ! this.state.editExamModal
        });
            
    };
   const updateExam = () => {
        let { subject, date } = this.state.editExamData;
        axios
            .put('http://localhost:3001/exams/' + this.state.editExamData.id, {
                subject,
                date
            })
            .then(response => {
                this.setState({editExamModal: false})
                this.refreshExams();
            });
          this.setState({filteredExams: []})
      }
}