// ******* REACT *******
import React, {Component} from 'react';
import API from "../../utils/API";

// ******* CSS AND STYLING *******
import {withStyles,MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './EarthquakeForm.styles';

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


class EarthquakeForm extends Component {
  state = {
    earthquake: [],
    type: "",
    plan: "",
    notes: ""
  };

  componentDidMount() {
    this.loadEarthquake();
  }

  loadEarthquake = () => {
    API.getEarthquake()
      .then(res =>
        this.setState({ earthquake: res.data })
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
    API.deleteEarthquake(id).then(() => {
      this.setState({
        earthquake: this.state.earthquake.filter((item) => item._id !== id)
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const contactIds = this.props.contacts.map(contact => contact._id);
    API.saveEarthquake({
      type: this.state.type,
      plan: this.state.plan,
      notes: this.state.notes,
      contacts: contactIds
    }).then(({data}) => {
      const newEarthquake = [data,
        ...this.state.earthquake]
      this.setState({
        earthquake: newEarthquake,
        type: '', 
        plan: '', 
        notes: ''
      });
      this.props.saveEarthquake(newEarthquake)
    })
  }

  render() {
    return (
      <Container>
        <CssBaseline />
        <MuiThemeProvider theme={theme}> 
        <form onSubmit={this.handleSubmit}>
        <Grid item xs={12}>
          <TextField fullWidth name="type" placeholder="Type" onChange={this.handleChange('type')} value={this.state.type}/>
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth name="plan" placeholder="Plan" onChange={this.handleChange('plan')} value={this.state.plan}/>
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth name="notes" placeholder="Notes" onChange={this.handleChange('notes')} value={this.state.notes}/>
          </Grid>
          <FormBtn aria-label="Delete" variant="contained" color="primary">Submit</FormBtn>
        </form>
        <div>
        <Typography component="h1" variant="h4" align="center">
              Earthquake
            </Typography>
          {this.state.earthquake.map(earthquake => {
            return (
              <Typography key={earthquake._id}>Type: {earthquake.type}<br/>
              Plan: {earthquake.plan}<br/>
              Notes: {earthquake.notes}
              <br/>
              <IconButton onClick={this.handleDelete(earthquake._id)} variant="contained" color="primary"><DeleteIcon fontSize="small" /></IconButton>
              </Typography>
            )})}
        </div>
        </MuiThemeProvider>
      </Container>
    )
  }
}

export default withStyles(styles)(EarthquakeForm);