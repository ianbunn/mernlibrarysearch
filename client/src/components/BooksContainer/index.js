import React, { Component } from "react"
import API from "../../utils/Api.js"
import SearchInput from "../SearchInput"
import BooksResults from "../BooksResults"
import BookDetails from "../BookDetails"
import NoPic from "../../images/nopic.jpg"

// Smart component for Books Container to pass its state
class BooksContainer extends Component {
    // Search is the input from user
    // Result is the response from Google Books API based on the search input
    state = {
        search: "",
        result: [],
        error: ""
    }

    // Using API search fx to search for books using the search input
    searchBooks = input => {
        API.search(input)
            .then((res) => {
                this.setState({
                    search: "",
                    result: res.data.items
                })
                console.log(this.state.result)
            }
            )
            .catch(err => console.log(err))
    }

    saveBook = event => {
        event.preventDefault();
        const target = event.target.parentNode.parentNode;
        console.log(target)
        API.saveBook({
            title: target.querySelector('.title').textContent,
            authors: target.querySelector('.authors').textContent,
            publisheddate: target.querySelector('.publisheddate').textContent,
            description: target.querySelector('.description').textContent,
            categories: target.querySelector('.categories').textContent,
            thumbnail: target.querySelector('.thumbnail').src,
            link: target.querySelector('.link').href,
            saved: true
        }).then(res => console.log(res));
    };

    // Handle the input change on form
    handleInputChange = event => {
        // Deconstructing the state based on the name that is being changed
        const { name, value } = event.target
        // Changing the state prop value for the name in the event target
        this.setState({
            [name]: value
        })
    }

    // Handle the form submission
    handleFormSubmit = event => {
        event.preventDefault()
        // Run the API search using Google Books API
        const searchInput = this.state.search
        if(searchInput){
            this.searchBooks(searchInput)
        } else {
            alert("Enter author or book name")
        }
    }

    // Render SearchInput, BooksResults and BookDetails
    render() {
        return (
            <div>

                {/* SearchInput component props */}
                <SearchInput
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                {/* BooksResults component props */}
                <BooksResults title={this.state.title}>
                    {/* Ternary operation to check for result */}
                    {this.state.result ? (
                        this.state.result.map(result => (
                            <BookDetails
                                key={result.id}
                                title={result.volumeInfo.title}
                                authors={result.volumeInfo.authors}
                                publisheddate={result.volumeInfo.publishedDate}
                                description={result.volumeInfo.description}
                                categories={result.volumeInfo.categories}
                                thumbnail={
                                    result.volumeInfo.imageLinks
                                    ? result.volumeInfo.imageLinks.thumbnail
                                    : NoPic
                                }
                                link={result.volumeInfo.infoLink}
                                saveBook={this.saveBook}
                            />
                        ))
                    ) : (
                            <h4 className="no-results">Please try another search!</h4>
                        )}
                </BooksResults>
                
            </div>
        )
    }
}

export default BooksContainer