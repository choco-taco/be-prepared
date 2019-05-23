import React from "react";
import Button from '@material-ui/core/Button';

// export function Input(props) {
//     return (
//         <div className="form-group">
//             <input className="form-control" {...props} />
//         </div>
//     );
// }

export function FormBtn(props) {
    return (
        <Button type="submit" {...props}>{props.children}
        </Button>
    );
}