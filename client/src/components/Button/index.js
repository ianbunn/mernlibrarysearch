import React from "react";
import "./style.css"

const Button = props => {
    if (props.children === "Delete Book") {
        return (
            <button id={props.id} onClick={props.onClick}>
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