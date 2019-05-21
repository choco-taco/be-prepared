import React from "react";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0"><br/>
      [ x ]
    </span>
  );
}

export default DeleteBtn;
