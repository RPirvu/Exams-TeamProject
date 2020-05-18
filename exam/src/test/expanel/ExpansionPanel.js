import React from 'react';
import DeleteExam from '../../component/button/DeleteExam'
import EditModal from '../../component/modals/EditModal';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    padding : '3px',
    paddingLeft: '300px',
  }
}));

export default function ExPanel({subject, date, id}) {
  const classes = useStyles();

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  return (
    <div className={classes.root}>
      <ExpansionPanel key={id}>

        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography> 
              {subject}
            </Typography>   
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>                          
                Date: {date }                      
        </ExpansionPanelDetails>

        <ExpansionPanelActions>
          <Button>      
            <EditModal id={id} sub={subject} da={date}/>
          </Button>      
          <DeleteExam id={id}/>          
        </ExpansionPanelActions>
        
      </ExpansionPanel>
      
      
    </div>
  );
}