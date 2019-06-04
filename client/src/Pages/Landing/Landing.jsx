// **** REACT ****
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// **** STYLES ****
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './Landing.styles';

// **** MATERIAL UI ****
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// **** ICONS **** 
import contacts from '../../contacts.png';
import plan from '../../plan.png';
import notes from '../../notes.png';

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
function Landing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>

        <AppBar color="primary" position="static" className={classes.appBar}>
          <Toolbar>
            <div className={classes.left} />
            <Link
              variant="h4"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/home"
            >
              {'Be Prepared'}
            </Link>
          </Toolbar>
        </AppBar>

        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit} >
            <div className={classes.heroContent} >

              <Typography  variant="h2" align="center" gutterBottom >
                Welcome To Be Prepared
              </Typography>

              <Typography  variant="h6" align="center" paragraph >
                Make a plan today. Your family may not be together if a disaster strikes, so it is important to know which types of disasters could affect your area.  Know how you’ll contact one another and reconnect if separated. Establish a family meeting place that’s familiar and easy to find.
              </Typography>

              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button href="/signup" variant="contained" >
                      Sign Up
                  </Button>
                  </Grid>
                  <Grid item>
                    <Button href="/login" variant="contained" color="primary">
                      Log In
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}


            <div className={classes.contents} >

              <Grid container sm={12} >
                <Grid md={4}>
                  <div className={classes.item}>
                    <img src={plan} alt='plan' />
                    <Typography variant="h4" className={classes.title}>
                      Preset plans
                    </Typography>
                    <Typography variant="h6">
                      {'Here you start off with four preset plans to make it easier than'}
                      {' struggling to decide on a plan for you and your family.'}
                    </Typography>
                  </div>
                </Grid>

                <Grid md={4}>
                  <div className={classes.item}>
                    <img src={contacts} alt='contacts' />
                    <Typography variant="h4" className={classes.title}>
                      Customize contacts
              </Typography>
                    <Typography variant="h6">
                      {'Customize each plan to have the appropiate point of contacts.'}

                    </Typography>
                  </div>
                </Grid>


                <Grid md={4}>
                  <div className={classes.item}>
                    <img src={notes} alt='notes' />

                    <Typography variant="h4" className={classes.title}>
                      Update notes
              </Typography>
                    <Typography variant="h6">
                      {'Everyone knows sometimes plans change and when that happens'}
                      {' you can always update your notes.'}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>

          </div>
        </main>
      </MuiThemeProvider>

    </React.Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
