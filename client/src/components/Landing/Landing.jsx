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


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main:'#31051f',
    
    },
    secondary: {
      main: '#5d2e46',
    },
    
  },
});

function Landing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
       <MuiThemeProvider theme={theme}>
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
      
         <main>
           {/* Hero unit */}
            <div className={classes.heroUnit} >
             <div className={classes.heroContent} >
              <Typography component="h1" variant="h2" align="center" color="textPrimary"  gutterBottom >
                 Welcome To Be Prepared
              </Typography>

              <Typography variant="h6" align="center"  paragraph>
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
