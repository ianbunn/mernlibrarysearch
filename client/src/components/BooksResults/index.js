import React from "react";
import "./style.css"

// BooksResults passes the props.children to BookDetails
const BooksResults = props => {
    return (
        <section>
            {props.children}
        </section>
    );
};

export default BooksResults;