import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContactForm from './ContactForm';
import EmergencyForm from './EmergencyForm';
import Review from './Review';
import styles from './CreatePlan.styles'


const steps = ['Household', 'Emergency', 'Blank'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ContactForm />;
    case 1:
      return <EmergencyForm />;
    case 2:
<<<<<<< HEAD
    //   return <Review />;
    break;
=======
        return <Review />;
>>>>>>> origin/master
    default:
      throw new Error('Unknown step');
  }
}

class CreatePlan extends React.Component {
  state = {
    activeStep: 0,
  };

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
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
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
                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
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