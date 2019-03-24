import React from "react";

// BooksResults passes the props.children to BookDetails
const BooksResults = props => {
    return (
        <section>
            {props.children}
        </section>
    );
};

export default BooksResults;