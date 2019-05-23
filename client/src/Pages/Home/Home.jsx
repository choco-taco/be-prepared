import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles, MuiThemeProvider,  createMuiTheme } from './node_modules/@material-ui/core/styles';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import Divider from './node_modules/@material-ui/core/Divider';
import styles from './Home.styles';
import Album from '../../components/Album';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main:'#5D2E46',
    },
    secondary: {
      main: '#1e88e5',
    },
    
  },
});


class Home extends React.Component {
    
  state = {
    open: true,
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}> 
       {/*App Bar */}
        <AppBar
        color='primary'
          position="absolute"
          align='center'
        >
          <Toolbar disableGutters={!this.state.open} className=         {classes.toolbar}>
           
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        {/*App Bar End */}
        </MuiThemeProvider>
               
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            

            <Album />

          </Typography>

          <Typography component="div" className={classes.chartContainer}>
          <Divider />
          </Typography>
         
         
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

