// **** REACT ****
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// **** STYLES ****
import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './Landing.styles';

// **** MATERIAL UI ****
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

      {/* ********* TOP BAR ********* */}

      <AppBar  color='primary' position="static" className={classes.appBar}>
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

      {/* ********* HERO UNIT ********* */}
      
      <main>
        <div className={classes.heroUnit} >
          <div className={classes.heroContent} >
            <Typography component="h1" variant="h2" align="center"  gutterBottom >
             Be Prepared
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks dont simply skip over it
              entirely.
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
