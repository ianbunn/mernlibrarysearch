import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/Api.js"
import BooksResults from "../components/BooksResults";
import BookDetails from "../components/BookDetails";
import StartSearch from "../components/StartSearch";
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

    deleteBook = event => {
        event.preventDefault();
        const target = event.target.parentNode.parentNode;
        const id = target.querySelector('button').id;
        API.deleteBook(id)
            .then((res) => {
                const deleteConfirm = window.confirm(`Are you sure you want to delete this book?`)
                if(deleteConfirm) {
                    this.loadBooks()
                }
            })
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
                                publisheddate={result.publisheddate}
                                description={result.description}
                                categories={result.categories}
                                thumbnail={
                                    result.thumbnail
                                        ? result.thumbnail
                                        : NoPic
                                }
                                link={result.link}
                                deleteBook={this.deleteBook}
                                id={result._id}
                                saved={result.saved}
                            />
                        ))
                    ) : (
                            <StartSearch />
                    )}
                </BooksResults>
            </div>                            
        );
    }
}

export default Saved;
