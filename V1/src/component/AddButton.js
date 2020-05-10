import React from 'react';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
class AddButton extends React.Component {

    state = {
        newExamModal : false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.toggleNewExamModal.bind(this);
    }

    toggleNewExamModal(){
        this.setState({
          newExamModal : ! this.state.newExamModal
        });
      } 

    render(){
        return(
            <div>
                <Button 
                className="my-3" 
                color="primary" 
                onClick={this.props.toggleNewExamModal.bind(this)}>
                    Add new Exam
                </Button>
            </div>
        );
    }
};

export default AddButton