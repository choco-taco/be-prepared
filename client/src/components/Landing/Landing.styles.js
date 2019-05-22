
export default theme => ({
  
  appBar: {
    position: 'relative',
  },
  
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    background: theme.palette.background.paper, 
    backgroundColor: '#5d2e46',

  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  left: {
    flex: .5,
  },
});
