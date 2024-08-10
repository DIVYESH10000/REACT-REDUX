import React from "react";

let ErrorMessage = ({ foodItems }) => {
  return (
    <React.Fragment>
      {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}
    </React.Fragment>
  );
};

export default ErrorMessage;
