import React from 'react';
import DeleteExam from '../../component/button/DeleteExam'
import EditModal from '../../component/modals/EditModal';
import Table from '@material-ui/core/Table'
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
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  rooot: {
    width: '100%',
  },
  table : {
    width : 400,
    fontSize: 20
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  insideColumn: {
      flexBasis : "23.33%"
  },
  boldStyle : {
      fontWeight : 'bold',
  },
  row: {
    flexBasis : '20%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  
}));

export default function ExPanel({subject, date, id,session,classroom,teacher,universityYear,studyYear,section,numberOfPlaces}) {
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
            <div className={classes.column}>
            <Typography className={classes.heading}>{subject}</Typography>
          </div>   
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{date}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}> Sesiune {session}</Typography>

          </div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>           
        <TableContainer component={Paper}>               
        <Table className={classes.table} >
           <TableBody >
             <TableRow>
              <TableCell className={classes.boldStyle}>
                Teacher 
              </TableCell>
              <TableCell>
                 {teacher}
               </TableCell>
             </TableRow>
             
             <TableRow>
              <TableCell className={classes.boldStyle}>
               University year 
              </TableCell>
              <TableCell>
                 {universityYear}
               </TableCell>
             </TableRow>
             <TableRow>
              <TableCell className={classes.boldStyle}>
              Classroom  code 
              </TableCell>
              <TableCell>
                 {classroom}
               </TableCell>
             </TableRow>
             <TableRow>
              <TableCell className={classes.boldStyle}>
               Study year 
              </TableCell>
              <TableCell>
                 {studyYear}
               </TableCell>
             </TableRow>

             <TableRow>
              <TableCell className={classes.boldStyle}>
              Specialization 
              </TableCell>
              <TableCell>
                 {section}
               </TableCell>
             </TableRow>
             <TableRow>
              <TableCell className={classes.boldStyle}>
              Number of seats 
              </TableCell>
              <TableCell>
                 {numberOfPlaces}
               </TableCell>
             </TableRow>

           </TableBody>
           
       </Table>   
       </TableContainer>            
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