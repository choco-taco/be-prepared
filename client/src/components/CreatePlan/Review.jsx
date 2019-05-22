import React, { Component } from 'react';
import API from "../../utils/API";
// import PropTypes from 'prop-types';

//******** MATERIAL UI ******** 
// import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Grid from '@material-ui/core/Grid';

//******** CODE STARTS ******** 
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
        <div>
        <Typography component="h1" variant="h4" align="center">
              Review Emergency
            </Typography>
          {this.state.emergency.map(emergency => {
            return (
              <p key={emergency._id}>Type: {emergency.type}<br/>
              Plan: {emergency.plan}<br/>
              Notes: {emergency.notes}
              <br/>
              </p>
            )})}
        </div>
        <div>
        <Typography component="h1" variant="h4" align="center">
              Review Contacts
            </Typography>
          {this.state.contacts.map(contacts => {
            return (
              <p key={contacts._id}>Name: {contacts.name}<br/>
              Mobile: {contacts.mobile}<br/>
              Address: {contacts.address}
              <br/>
              </p>
            )})}
        </div>
    </React.Fragment >
    );
  }
}

export default Review;