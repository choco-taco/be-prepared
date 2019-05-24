// ******* REACT *******
import React, {Component} from 'react';
import API from "../../utils/API";

// ******* CSS AND STYLING *******
import {withStyles,MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './ContactForm.styles';

//******** MATERIAL UI ******** 
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

//******** COMPONENTS AND STUFF ******** 
import { Container } from "../Grid";
import { FormBtn } from "../Form";

//******** CODE STARTS ******** 

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Asap Condensed',
    ]
  },
  palette: {
    primary: {
      main:'#5D2E46',
    },
    secondary: {
      main: '#1e88e5',
    },
  },
});


class ContactForm extends Component {
  state = {
    contacts: [],
    name: "",
    mobile: "",
    address: ""
  };

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = () => {
    API.getContacts()
      .then(res =>
        this.setState({ contacts: res.data })
      )
      .catch(err => console.log(err));
  };

  handleChange = key => {
    return event => {
      this.setState({
        [key]: event.target.value
      })
    }
  };

  handleDelete = id => () => {
    API.deleteContact(id).then(() => {
      this.setState({
        contacts: this.state.contacts.filter((item) => item._id !== id)
      });
    });
  }


  handleSubmit = event => {
    event.preventDefault();
    API.saveContact({
      name: this.state.name,
      mobile: this.state.mobile,
      address: this.state.address
    }).then(({data}) => {
      const newContacts = [data, ...this.state.contacts];
      this.setState({
        contacts: newContacts,
        name: '',
        mobile: '',
        address: ''
      });
      this.props.saveContacts(newContacts)
    })
  }

  render() {
    return (
      <Container>
        <CssBaseline />
        <MuiThemeProvider theme={theme}> 

        <form onSubmit={this.handleSubmit}>
        <Grid item xs={12}>
          <TextField fullWidth name="name" placeholder="Name" onChange={this.handleChange('name')} value={this.state.name}/>
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth name="mobile" placeholder="Mobile" onChange={this.handleChange('mobile')} value={this.state.mobile}/>
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth name="address" placeholder="Address" onChange={this.handleChange('address')} value={this.state.address}/>
          </Grid>
          <FormBtn aria-label="Delete" variant="contained" color="primary">Submit</FormBtn>
        </form>
        <div>
        <Typography component="h1" variant="h4" align="center">
              Contacts
            </Typography>
          {this.state.contacts.map(contact => {
            return (
              <Typography key={contact._id}>Name: {contact.name}<br/>
              Mobile: {contact.mobile}<br/>
              Address: {contact.address}
              <br/>
              <IconButton onClick={this.handleDelete(contact._id)} variant="contained" color="primary"><DeleteIcon fontSize="small" /></IconButton>
              </Typography>
            )})}
        </div>

        </MuiThemeProvider>
      </Container>
    )
  }
}

export default withStyles(styles)(ContactForm);
