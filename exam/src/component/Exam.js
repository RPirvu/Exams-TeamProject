import React from 'react';
import DeleteExam from '../component/button/DeleteExam'
import EditModal from '../component/modals/EditModal';
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
import  {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
          width: '60%',
          padding : '3px',
          paddingLeft: '300px',
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
        margin: '0',
        padding: '0',
        border: '0',
      
        font: 'inherit',
        
    },
    row: {
      flexBasis : '20%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    
  }));
  
  const theme=createMuiTheme({
    palette:{
      primary:
      {
          main: '#5E35B1'
      },
      
  
    }
  })

export default function Exam({subject, date, id,session,classroom,teacher,universityYear,studyYear,section,numberOfPlaces, studentName,startHour}) {
    const classes = useStyles();
  
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
              <Typography className={classes.secondaryHeading}>{date.split("-").reverse().join("-")}</Typography>
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
               <TableRow>
                <TableCell className={classes.boldStyle}>
                Student 
                </TableCell>
                <TableCell>
                   {studentName}
                 </TableCell>
               </TableRow>
               <TableRow>
                <TableCell className={classes.boldStyle}>
                Start time
                </TableCell>
                <TableCell>
                   {startHour}
                 </TableCell>
               </TableRow>
  
             </TableBody>
             
         </Table>   
         </TableContainer>            
          </ExpansionPanelDetails>
          <MuiThemeProvider theme={theme}>
          <ExpansionPanelActions>
        
            <Button >      
              <EditModal Esubject={subject} 
                        Edate={date} 
                        id={id} 
                        Esession={session} 
                        Eclassroom={classroom} 
                        EuniversityYear={universityYear}
                        EstudyYear={studyYear}
                        Esection={section}
                        EnumberOfPlaces={numberOfPlaces} 
                        Eteacher={teacher}
                        EstudentName={studentName}
                        EstartHour={startHour}
                      />
            </Button>      
            <DeleteExam id={id}/>          
          </ExpansionPanelActions>
          </MuiThemeProvider>
        </ExpansionPanel>
        
        
      </div>
    );
  }