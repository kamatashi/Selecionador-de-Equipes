import React from "react";


const Button = (props) => {
    return (
        <button style={props.style} onClick={props.onClick}>
          {props.label}|
        </button>
    );
};

export default Button;