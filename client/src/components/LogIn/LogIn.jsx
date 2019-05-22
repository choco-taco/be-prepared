import React from 'react';
import styles from "./LogIn.styles.js";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import GestureIcon from '@material-ui/icons/Gesture';
import API from "../../utils/API";

class LogIn extends React.Component {

  state = {
    user: [],
    username: '',
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
    API.userSignUp({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }).then(({ data }) => {
      this.setState({
        user: [data, ...this.state.user]
      })
      // event.preventDefault();
      this.setState({ username: '', email: '', password: '' })
    })
  }

  render() {
  const { classes } = this.props;

  return (
    <main className={classes.main}>

      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GestureIcon color='primary' />

        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" name="username" autoComplete="username" autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
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
          >
            Log In
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);