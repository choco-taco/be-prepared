
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Household Information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="home#"
            name="home#"
            label="Home Phone #"
            fullWidth
            autoComplete=" home-#"
          />
          </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete=" address"
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile#"
            name="mobile#"
            label="Mobile #"
            fullWidth
            autoComplete="mobile-#"
          />
        </Grid>      
        <Grid item xs={12} sm={6}>
          <TextField
            id="alternate#"
            name="alternate#"
            label="Alternate #"
            fullWidth
            autoComplete=" alt-#"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField id="info" name="info" label="Important medical or other information:" fullWidth />
        </Grid>
        
        <br/>
        <br/>
        <br/>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name2"
            name="name2"
            label="Name"
            fullWidth
            autoComplete="name2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile#2"
            name="mobile#2"
            label="Mobile #"
            fullWidth
            autoComplete="mobile-#2"
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField
            id="alternate#2"
            name="alternate#2"
            label="Alternate #"
            fullWidth
            autoComplete=" alt-#2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email2"
            name="email2"
            label="Email"
            fullWidth
            autoComplete="email2"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField id="info" name="info" label="Important medical or other information:" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;