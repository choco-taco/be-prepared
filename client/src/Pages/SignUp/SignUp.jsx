// **** REACT ****
import React from 'react';
import PropTypes from 'prop-types';

// **** STYLES ****
import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import styles from "./Signup.styles.js";
import CssBaseline from '@material-ui/core/CssBaseline';

// ***** COMPONENTS *****
import Navigation from '../../components/Navigation';

// **** MATERIAL UI ****
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
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

function SignUp(props) {
  const { classes } = props;

  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
      <Navigation/>
    <main className={classes.main}>
    
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
            control={<Checkbox value="remember" color="#607d8b" />}
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
         <br/>
         <br/>
         <Typography>Have An Account <a href="/LogIn" class="active">LogIn</a> Here</Typography>

        </form>
      </Paper>
    </main>
    </MuiThemeProvider>
    </div>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);