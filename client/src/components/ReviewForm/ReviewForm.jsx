//******** REACT *********
import React, { Component } from 'react';
import API from "../../utils/API";
// import PropTypes from 'prop-types';

//******** CSS AND STYLING  ******** 
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './ReviewForm.styles';


//******** MATERIAL UI ******** 
import Typography from '@material-ui/core/Typography';

//******** CODE STARTS ******** 

// *** Theme-Related Code ***
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Asap Condensed',
    ],
  },
  palette: {
    primary: {
      light: '#bc477b',
      main: '#880e4f',
      dark: '#560027',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#efdcd5',
      main: '#bcaaa4',
      dark: '#8c7b75',
      contrastText: '#000000',
    },
  },
});

class Review extends Component {
  state = {
    emergency: [],
    type: "",
    plan: "",
    notes: "",
    contacts: [],
    name: "",
    mobile: "",
    address: ""
  };

  componentDidMount() {
    this.loadEmergency();
    this.loadContacts();
  }

  loadEmergency = () => {
    API.getEmergency()
      .then(res =>
        this.setState({ emergency: res.data })
      )
      .catch(err => console.log(err));
  };
  loadContacts = () => {
    API.getContacts()
      .then(res =>
        this.setState({ contacts: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <div>
            <Typography component="h1" variant="h4" align="center">
              Review Emergency
            </Typography>
            {this.state.emergency.map(emergency => {
              return (
                <Typography key={emergency._id}>Type: {emergency.type}<br />
                  Plan: {emergency.plan}<br />
                  Notes: {emergency.notes}
                  <br />
                </Typography>
              )
            })}
          </div>

          <div>
            <Typography component="h1" variant="h4" align="center">
              Review Contacts
            </Typography>
            {this.state.contacts.map(contacts => {
              return (
                <Typography key={contacts._id}>Name: {contacts.name}<br />
                  Mobile: {contacts.mobile}<br />
                  Address: {contacts.address}
                  <br />
                </Typography>
              )
            })}
          </div>
        </MuiThemeProvider>
      </React.Fragment >
    );
  }
}

export default withStyles(styles)(Review);