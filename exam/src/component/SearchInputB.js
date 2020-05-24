import React,{useState,useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import  {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import {Context} from '../api/Context';
import AddModal from '../component/modals/AddModal'
import {Select} from '@material-ui/core';
import {MenuItem} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
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
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inhe100rit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


 export const SearchInputB = () => {
  const classes = useStyles();
    // const [ exams,setExams ] = useContext(Context)
    // const [ search, setSearch ] = useContext(Context)
    // const [ dataFiltered,setDataFiltered ] = useContext(Context)
    
    const { examData, examFilter } = useContext(Context);
    const [stateExam, setStateExam] = examData;
    const [stateDataFilter, setStateDataFilter] = examFilter;
    const [search , setSearch] = useState('Subject');

    let data = stateExam;
    const updateFilter = (value) => {
      console.log("upFIlter",search)
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
        // console.log("DF",stateDataFilter);
        // console.log("EX",stateExam)
        
    }
  
const theme=createMuiTheme({
  palette:{
    primary:
    {
        main: '#cfe8fc'
    },
    secondary : red

  }
})

 const updateSearch = (event) => {
   setSearch(event.target.value);
   console.log(search)
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
          <Typography className={classes.title} variant="h6" noWrap>
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
          <div>
          
          <Select 
          
          autoFocus
          margin="dense"
          id="choice"
          type="choice"
          label="choice"
          
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