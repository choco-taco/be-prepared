import React, {Component} from 'react';
import API from "../../utils/API";

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

class EmergencyForm extends Component {
  state = {
    emergency: [],
    type: "",
    plan: "",
    notes: ""
  };

  componentDidMount() {
    this.loadEmergency();
  }

  loadEmergency = () => {
    API.getEmergency()
      .then(res =>
        this.setState({ emergency: res.data })
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
    API.deleteEmergency(id).then(() => {
      this.setState({
        emergency: this.state.emergency.filter((item) => item._id !== id)
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    API.saveEmergency({
      type: this.state.type,
      plan: this.state.plan,
      notes: this.state.notes
    }).then(({data}) => {
      this.setState({
        emergency: [data, ...this.state.emergency]
      })
      
      this.setState({type: '', plan: '', notes: ''})
    })
  }

  render() {
    return (
      <Container>
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
              Emergency
            </Typography>
          {this.state.emergency.map(emergency => {
            return (
              <p key={emergency._id}>Type: {emergency.type}<br/>
              Plan: {emergency.plan}<br/>
              Notes: {emergency.notes}
              <br/>
              <IconButton onClick={this.handleDelete(emergency._id)} variant="contained" color="primary"><DeleteIcon fontSize="small" /></IconButton>
              </p>
            )})}
        </div>
      </Container>
    )
  }
}

export default EmergencyForm;

// function InfoForm() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//       Blank
//       </Typography>
//       <Grid container spacing={24}>
//         <Grid item xs={12} md={6}>
//           <TextField required id="cardName" label="blank" fullWidth />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField required id="cardNumber" label="blank" fullWidth />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField required id="expDate" label="blank" fullWidth />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           {/* <TextField
//             required
//             id="cvv"
//             label="CVV"
//             helperText="Last three digits on signature strip"
//             fullWidth
//           /> */}
//         </Grid>
//         <Grid item xs={12}>
//           {/* <FormControlLabel
//             control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//             label="Remember credit card details for next time"
//           /> */}
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default InfoForm;