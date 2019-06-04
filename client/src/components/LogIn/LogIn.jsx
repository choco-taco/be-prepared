import React from 'react';
import styles from "./LogIn.styles.js";
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
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#31051f',

    },
    secondary: {
      main: '#5d2e46',
    },

  },
});


function LogIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>

      <CssBaseline />
      <MuiThemeProvider theme={theme}>

        <Paper color='secondary' className={classes.paper}>

          <Typography component="h1" gutterBottom variant="h5">
            Log In
        </Typography>

          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link href="signup" align="center" underline="always">
              Sign Up here
              </Link>
          </Typography>

          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
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
              Log In
          </Button>
          </form>
        </Paper>
      </MuiThemeProvider>
    </main>
  );
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);
