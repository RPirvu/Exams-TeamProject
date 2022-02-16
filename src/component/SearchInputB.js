import React,{useState,useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import  {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {Context} from '../api/Context';
import AddModal from '../component/modals/AddModal'
import {Select} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {MenuItem} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'rgb(250,250,250)',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'center',
    alignItems: 'center',
    color: 'rgb(250,250,250)',
    paddingLeft: '220px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'rgb(240,240,240)',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));


 export const SearchInputB = () => {
  const classes = useStyles();  
    const { examData, examFilter } = useContext(Context);
    const [stateExam, setStateExam] = examData;
    const [stateDataFilter, setStateDataFilter] = examFilter;
    const [search , setSearch] = useState('Section');

    let data = stateExam;
    const updateFilter = (value) => {

        if (search === 'Subject')
        {
        setStateDataFilter(data.filter((exam) => {
            return exam.subject.toLowerCase().indexOf(value.toLowerCase()) !== -1
          })) 
        };
        if (search === 'Section')
        {
        setStateDataFilter(data.filter((exam) => {
            return exam.section.toLowerCase().indexOf(value.toLowerCase()) !== -1
          })) 
        };
        if (search === 'Study Year')
        {
        setStateDataFilter(data.filter((exam) => {
          return exam.studyYear.toLowerCase().indexOf(value.toLowerCase()) !== -1
        }))  
      };
      
    }
    
    const onInputChange = (event)  => {
      
     
        updateFilter(event.target.value);
        event.preventDefault();
    }
  
const theme=createMuiTheme({
  palette:{
    primary: { main: '#333' },
    secondary: { main: '#f50057' },
    white:{ main: 'rgb(250,250,250)'}
  }
})

 const updateSearch = (event) => {
   setSearch(event.target.value);
   
 }

const choice = [
  'Subject', 'Section', 'Study Year'
]


  return (
    <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
      <AppBar position="relative">
      
        <Toolbar>
          <AddModal/>
          
          
          <Typography className={classes.title} variant="h4" noWrap>
            Exam Planner
          </Typography>
          

          
      
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={onInputChange.bind(this)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div>
             
            <Select 
            
            autoFocus
            margin="dense"
            id="choice"
            type="choice"
            label="choice"
            color="secondary"
            style={{ color: 'white' }}
            onChange={updateSearch}
            fullWidth
            
            >  
            {choice.map((choice) => (
              <MenuItem key={choice} value={choice}>
                {choice}
              </MenuItem>
          ))}
      </Select> 
          </div>
        </Toolbar>
       
      </AppBar>
      
      </MuiThemeProvider>
    </div>
  );
}

export default SearchInputB