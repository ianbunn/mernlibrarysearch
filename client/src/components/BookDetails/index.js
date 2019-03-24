import React from "react"
import Button from "../Button"
import "./style.css"

// BookDetails component holds all of the book information from Google Books API response
const BookDetails = props => {
    return (
        // <div className="card mb-3">
        //     <div className="row no-gutters">
        //         <div className="col-md-2 align-self-center">
        //             <img src={props.thumbnail} className="thumbnail" alt={props.title} />
        //         </div>
        //         <div className="col-md-10">
        //             <div className="card-body">
        //                 <span className="card-title"><h6>Book Title:</h6> <span className="title">{props.title}</span></span>

        //                 <span className="card-text">
        //                     <h6>Author(s):</h6> <span className="authors">{props.authors}</span>

        //                     <h6>Published Date:</h6> <span className="publisheddate">{props.publisheddate}</span>

        //                     {/* Ternary operation to check if categories exists */}
        //                     {props.categories ? (
        //                         <span><h6>Categories:</h6> <span className="categories">{props.categories}</span></span>
        //                     ) : (
        //                             <span><h6>Categories:</h6> <span className="categories">No categories provided.</span></span>
        //                         )}

        //                     {/* Ternary operation to check if description exists */}
        //                     {props.description ? (
        //                         <span><h6>Description:</h6> <span className="description">{props.description}</span></span>
        //                     ) : (
        //                             <span><h6>Description:</h6> <span className="description">No description provided.</span></span>
        //                         )}
        //                 </span>

        //                 <div>
        //                     {/* Button to Read More in Google Books */}
        //                     <a href={props.link} className="link" target="_blank" rel="noopener noreferrer">Read More</a>

        //                     {/* Button to Save or Delete from MongoDB */}
        //                     {props.saved && props.id ? (
        //                         <Button id={props.id} onClick={props.deleteBook}>Delete Book</Button>
        //                     ) : (
        //                             <Button onClick={props.saveBook}>Save Book</Button>
        //                         )}
        //                 </div>
        //             </div>
        //         </div>
        //         </div>
        //     </div>

        <div className="card">
            <div className="card-body">
            <h6>Book Title:</h6> <span className="title">{props.title}</span>

            <h6>Author(s):</h6> <span className="authors">{props.authors}</span>

            <h6>Published Date:</h6> <span className="publisheddate">{props.publisheddate}</span>
            
            {/* Ternary operation to check if categories exists */}
            {props.categories ? (
                <span><h6>Categories:</h6> <span className="categories">{props.categories}</span></span>
            ) : (
                <span><h6>Categories:</h6> <span className="categories">No categories provided.</span></span>
            )}
            
            {/* Ternary operation to check if description exists */}
            {props.description ? (
                <span><h6>Description:</h6> <span className="description">{props.description}</span></span>
            ) : (
                <span><h6>Description:</h6> <span className="description">No description provided.</span></span>
            )}
            {/* Thumbnail image */}
            <div className="image">
                <img src={props.thumbnail} className="thumbnail" alt={props.title} />
            </div>
            {/* View more button */}
            <div>
                {/* Button to Read More in Google Books */}
                <a href={props.link} className="link" target="_blank" rel="noopener noreferrer">Read More</a>

                {/* Button to Save or Delete from MongoDB */}
                {props.saved && props.id ? (
                    <Button id={props.id} onClick={props.deleteBook}>Delete Book</Button>
                ) : (
                    <Button onClick={props.saveBook}>Save Book</Button>
                )}
            </div>
            </div>
        </div>
    )
}

export default BookDetails