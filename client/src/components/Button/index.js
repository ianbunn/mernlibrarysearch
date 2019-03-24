import React from "react";

// dynamic button so that it is reusable for both saving and deleting.

const Button = props => {
    if (props.children === "Save") {
        return (
            <button onClick={props.onClick}>
                {props.children}
            </button>
        );
    } else {
        return (
            <button onClick={props.onClick}>
                {props.children}
            </button>
        );
    }
};

export default Button;