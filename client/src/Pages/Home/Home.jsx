import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import { mainListItems, secondaryListItems } from './ListItems';
import styles from './Home.styles';
import Album from '../../components/Album';
import bluegrey from '@material-ui/core/colors/blueGrey';


const theme = createMuiTheme({
  typography: { 
    useNextVariants: true,
  },
  palette: {
    primary: bluegrey,  
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
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className=         {classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
             >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
              align='center'
            >
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        {/*App Bar End */}
        </MuiThemeProvider>
        
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        > 
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          <List>{mainListItems}</List>

          <Divider />

          <List>{secondaryListItems}</List>

        </Drawer>
        
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

