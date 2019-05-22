import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import styles from './Landing.styles';
import bluegrey from '@material-ui/core/colors/blueGrey';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: bluegrey,
    secondary: {
      main: '#1e88e5',
    },
    
  },
});

function Landing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
      <AppBar  color='inherit' position="static" className={classes.appBar}>
        <Toolbar>
        <div className={classes.left} />
          <Link
            variant="h4"
            underline="none"
            color="primary"
            className={classes.title}
            href="/home"
          >
            {'Be Prepared'}
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent} >
            <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom >
             Welcome To Be Prepared
            </Typography>
            <Typography variant="h6" align="center" color="secondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks dont simply skip over it
              entirely.
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button href="/signup" variant="contained" color="primary">
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
