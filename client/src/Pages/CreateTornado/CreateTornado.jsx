//******** REACT ********* 
import React from 'react';
import PropTypes from 'prop-types';

//******** CSS AND STYLING  ******** 
import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './CreateTornado.styles';

//******** MATERIAL UI ******** 
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//******** COMPONENTS AND STUFF ******** 
import ContactForm from '../../components/ContactForm';
import TornadoForm from '../../components/TornadoForm';
import TornadoReview from '../../components/TornadoReview';
// import EmergencyForm from '../../components/EmergencyForm';
// import Review from '../../components/ReviewForm';
import Navigation from '../../components/Navigation';


//******** CODE STARTS ******** 

// Theme Related Code
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

const steps = ['Household', 'Emergency', 'Done!'];

class CreateTornado extends React.Component {
  state = {
    activeStep: 0,
    tornado: [],
    contacts: [],
  };


  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContactForm saveContacts={this.saveContacts} />;
      case 1:
        return <TornadoForm contacts={this.state.contacts} saveTornado={this.saveTornado} />;
      case 2:
          return <TornadoReview />;
      default:
        throw new Error('Unknown step');
    }
  }
  saveContacts = (newContacts) => {
    this.setState({
      contacts: newContacts
    })
  }

  saveTornado  = (newTornado) => {
    this.setState({
      emergency: newTornado
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
        <MuiThemeProvider theme={theme}> 
        <Navigation/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Edit Tornado Plan Information
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
                  <Typography variant="h5" gutterBottom align="center">
                    You're going to live!
                    <br/>
                    <i className="fas fa-glass-cheers"></i>
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                  Your Plan Has been created. View your plan by clicking the button below.
                  </Typography>
                  <div align="center"><a href="/tornadoplan"><Button color="secondary" variant="contained">View Plan</Button></a></div>
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
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

CreateTornado.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateTornado);