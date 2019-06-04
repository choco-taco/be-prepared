// **** REACT ****
import React from 'react';
import PropTypes from 'prop-types';

// **** STYLES ****
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from "./LogIn.styles.js";

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
import Link from '@material-ui/core/Link';
// import RenderToLayer from 'material-ui/internal/RenderToLayer';

//API calls
import API from "../../utils/API";

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

class LogIn extends React.Component {

  state = {
    user: [],
    email: '',
    password: ''
  }

  componentDidMount() {
    this.handleSubmit()
  }

  handleChange = key => {
    return event => {
      this.setState({
        [key]: event.target.value
      })
    }
  };

  handleSubmit = event => {
    API.userLogIn({
      email: this.state.email,
      password: this.state.password
    }).then(({ data }) => {
      this.setState({
        user: [data, ...this.state.user]
      })
      this.setState({ email: '', password: '' })
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Navigation />
          <main className={classes.main}>
            <Paper className={classes.paper}>
              <Typography component="h1" gutterBottom variant="h5">
                Log In
        </Typography>
              <Typography variant="body2" align="center">
                {'Not a member yet? '}
                <Link href="signup" align="center" underline="always">
                  Sign Up here
              </Link>
              </Typography>
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="Email">Email</InputLabel>
                  <Input onChange={this.handleChange('email')} id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input onChange={this.handleChange('password')} name="password" type="password" id="password" autoComplete="current-password" />
                </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >Log In</Button>
              </form>
            </Paper>
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}
LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);