import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0"><br />
      <CssBaseline />
      <Button>x</Button>
    </span>
  );
}

export default DeleteBtn;
