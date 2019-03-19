import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            <h2>All Mighty Book Search</h2>
            <p>Search and Save Books of Interest</p>
        </div>
    );
}

export default Jumbotron;
