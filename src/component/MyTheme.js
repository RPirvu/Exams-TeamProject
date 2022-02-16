import { createMuiTheme } from '@material-ui/core';
 

export default createMuiTheme({
    palette: {
        primary: { 
          main: '#165788',
          contrastText: '#fff',
        },
        secondary: { 
          main: '#69BE28',
          contrastText: '#fff',
        },
        companyBlue: {
            backgroundColor: '#3f50b5',
            color: '#fff',
        },
        companyRed: { 
            backgroundColor: '#d50000',
            color: '#fff',
        },
        accent: { 
            backgroundColor: '#333', 
            color: '#000',
        },
        companyGreen: { 
            backgroundColor: '#4caf50',
            color: '#fff',
        },
    },
});