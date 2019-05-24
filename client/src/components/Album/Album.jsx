import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './Album.styles';
import axios from 'axios';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8];


class Album extends Component {
 

 state = {
  loading: true,
  emergency: []
  
 };

 componentDidMount = () => {
    axios.get(`/api/emergency/`).then(({ data }) => {
      console.log(data);
this.setState({ emergency: data, loading: false });
  });

};

render = () => {
  const classes = this.props.classes;
  return (
    <React.Fragment>
      <CssBaseline />
    
      <main>
                
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
         
          {this.state.emergency.map(emergency => 
              <Grid item  sm={6} md={4} lg={3}>

                <Card className={classes.card}>

                  {/* <CardMedia
                    className={classes.cardMedia}
                    image={this.props.imageurl}
                    title={this.props.name + " image"}
                  /> */}

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {emergency.type}
                    </Typography>

                    <Typography>
                     {emergency.plan}
                    </Typography>
                    
                  </CardContent>

                  <CardActions>
                    <a className={classes.link} href={`${process.env.PUBLIC_URL}/emergency/${this.props.id}`}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </a>

                    <Button size="small" color="primary">
                      Edit
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
          )}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
};
};

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
