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