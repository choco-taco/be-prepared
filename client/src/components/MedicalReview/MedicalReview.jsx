//******** REACT *********
import React, { Component } from 'react';
import API from "../../utils/API";
// import PropTypes from 'prop-types';

//******** CSS AND STYLING  ******** 
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './MedicalReview.styles';


//******** MATERIAL UI ******** 
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';


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

class MedicalReview extends Component {
  state = {
    medical: [],
    type: "",
    plan: "",
    notes: "",
    contacts: [],
    name: "",
    mobile: "",
    address: ""
  };

  componentDidMount() {
    this.loadMedical();
    this.loadContacts();
  }

  loadMedical = () => {
    API.getMedical()
      .then(res =>
        this.setState({ medical: res.data })
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
              Medical Plan
            </Typography>
            {this.state.medical.map(medical => {
              return (
                <Typography key={medical._id}><i class="fas fa-ambulance"></i>Type: {medical.type}<br />
                  Plan: {medical.plan}<br />
                  Notes: {medical.notes}
                  <br /><br />
                </Typography>
              )
            })}
          </div>

          <div>
            <Typography component="h1" variant="h4" align="center">
             Contacts
            </Typography>
            {this.state.contacts.map(contacts => {
              return (
                <Typography key={contacts._id}><i className="fas fa-child"></i> Name: {contacts.name}<br />
                  <i className="fas fa-mobile-alt"></i> Mobile: {contacts.mobile}<br />
                  <i className="fas fa-home"></i> Address: {contacts.address}
                  <br /><br />
                </Typography>
              )
            })}
          </div>
        </MuiThemeProvider>
      </React.Fragment >
    );
  }
}

export default withStyles(styles)(MedicalReview);