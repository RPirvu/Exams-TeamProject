import { createMuiTheme } from '@material-ui/core';
 

export default createMuiTheme({
    palette: {
        primary: { // works
          main: '#165788',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#69BE28',
          contrastText: '#fff',
        },
        companyBlue: {
            backgroundColor: '#65CFE9',
            color: '#fff',
        },
        companyRed: { 
            backgroundColor: '#4caf50',
            color: '#fff',
        },
        accent: { 
            backgroundColor: '#333', 
            color: '#000',
        },
    },
});