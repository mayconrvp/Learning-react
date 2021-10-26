import React, { cloneElement } from "react";
//import FamiliaMembro from './FamiliaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })}
    </div>
  );
};
