import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './Landing.styles';

 

  function ContainedButtons(props) {
    const { classes } = props;
    return (
    <main>
       <img src='../../../bePrepared.jpg' alt="scar" />

      <div>
        <Button 
        href="/home"
        variant="contained" className={classes.button}>
          home
        </Button>

        <Button 
        href="/signup"
        variant="contained" className={classes.button}>
          sign up
        </Button>
      
      </div>
    </main>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);