import React from 'react';
import styles from "./Signup.styles.js";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

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


function SignUp(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
    
      <CssBaseline />
      <MuiThemeProvider theme={theme}> 

      <Paper className={classes.paper}>


         <Typography component="h1" variant="h5">
            Sign Up
         </Typography>
         <form className={classes.form}>
          <FormControl margin="normal" required     fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" name="username" autoComplete="username" autoFocus />
          </FormControl>

            <FormControl margin="normal" required   fullWidth>
               <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>

          <FormControlLabel
            control={<Checkbox value="remember" color="inherit" />}
            label="Remember me"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Typography variant="body2" align="center">
              {'Have An Account Already '}
              <Link gutterBottom href="login" align="center" underline="always">
                Log In here
              </Link>
            </Typography>
        </form>
      </Paper>
      </MuiThemeProvider>
    </main>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);