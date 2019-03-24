import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/Api.js"
import BooksResults from "../components/BooksResults";
import BookDetails from "../components/BookDetails";
import NoPic from "../images/nopic.jpg"

class Saved extends Component {
    state = {
        result: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    componentDidUpdate(){}

    render() {
        return (
            <div>
                <Jumbotron />
                <BooksResults title={this.state.title}>
                    {/* Ternary operation to check for result */}
                    {this.state.result ? (
                        this.state.result.map(result => (
                            <BookDetails
                                key={result._id}
                                title={result.title}
                                authors={result.authors}
                                publishedDate={result.publisheddate}
                                description={result.description}
                                categories={result.categories}
                                thumbnail={
                                    result.thumbnail
                                        ? result.thumbnail
                                        : NoPic
                                }
                                link={result.infoLink}
                                deleteBook={this.deleteBook}
                                id={result._id}
                            />
                        ))
                    ) : (
                            <h4 className="no-results">Please try another search!</h4>
                        )}
                </BooksResults>
            </div>                            
        );
    }
}

export default Saved;
