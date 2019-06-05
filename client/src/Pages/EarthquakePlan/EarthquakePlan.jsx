// **** REACT ****
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// **** COMPONENTS ****
import Navigation from '../../components/Navigation';
// import ContactForm from '../../components/ContactForm';
// import EmergencyForm from '../../components/EmergencyForm';
import EarthquakeReview from '../../components/EarthquakeReview';

// **** STYLES ****
import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './EarthquakePlan.styles';

import Paper from '@material-ui/core/Paper';

// **** MATERIAL UI ****
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// **** CODE STARTS HERE ****

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

// *** Landing Page Code ***
function EarthquakePlan(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
       <MuiThemeProvider theme={theme}>
         <Navigation/>
      
         <main>
           {/* Hero unit */}
            <div className={classes.heroUnit} >
             <div className={classes.heroContent} >
              <Typography component="h1" variant="h2" align="center" color="textPrimary"  gutterBottom >
                 Earthquake Plan
              </Typography>

              <Typography variant="h6" align="center"  paragraph>
                 This is the emergency plan in case of Earthquake.
              </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button href="/createearthquake" variant="contained" >
                   Edit
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="/earthquakeshare" variant="contained" color="primary">
                    Share
                  </Button>
                </Grid>
              </Grid>
            </div>
           </div>
           </div>
           <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
         
        </div>
        

        <main className={classes.layout}>
        <Paper className={classes.paper}>
        <EarthquakeReview/>
        </Paper>
        </main>

        </main>
     </MuiThemeProvider>

  </React.Fragment>
  );
}

EarthquakePlan.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EarthquakePlan);
