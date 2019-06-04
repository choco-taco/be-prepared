export default theme => ({
  
  appBar: {
    position: 'relative',
  },
  
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    background: theme.palette.background.paper, 
    backgroundColor: '#efdcd5',
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

  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * (0, 5),
  },
  fab: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
 
  
});
