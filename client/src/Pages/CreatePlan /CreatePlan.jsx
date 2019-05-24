//******** REACT ********* 
import React from 'react';
import PropTypes from 'prop-types';

//******** CSS AND STYLING  ******** 
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './CreatePlan.styles';

//******** MATERIAL UI ******** 
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//******** COMPONENTS AND STUFF ******** 
import ContactForm from '../../components/ContactForm';
import EmergencyForm from '../../components/EmergencyForm';
import Review from '../../components/ReviewForm';
import Navigation from '../../components/Navigation';

//******** CODE STARTS ******** 
const steps = ['Household', 'Emergency', 'Blank'];

class CreatePlan extends React.Component {
  state = {
    activeStep: 0,
    emergency: [],
    contacts: [],
  };


  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContactForm saveContacts={this.saveContacts} />;
      case 1:
        return <EmergencyForm contacts={this.state.contacts} saveEmergencies={this.saveEmergencies} />;
      case 2:
          return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
  saveContacts = (newContacts) => {
    this.setState({
      contacts: newContacts
    })
  }

  saveEmergencies  = (newEmergencies) => {
    this.setState({
      emergency: newEmergencies
    })
  }



  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />

        <Navigation/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              CreatePlan
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your Plan Has been created.
                  </Typography>
                  <a href="/home"><Button color="secondary" variant="contained">Home</Button></a>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                      </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Save Plan' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

CreatePlan.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePlan);