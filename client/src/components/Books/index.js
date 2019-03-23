import React, { Component } from "react";
import API from "../../utils/API"

class Books extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    }

    searchBooks = search => {
        API.search(search)
            .then(res =>
                this.setState({
                    results: res.data.items.volumeInfo,
                    search: '',
                    resultTitle: `Showing results for '${search}':`
                })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
        console.log(this.state)
    };

    render () {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={this.handleInputChange}
                        value={this.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Book"
                        id="search"
                    />
                    <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
                        Search
            </button>
                </div>
            </form>
        );
    }
}

export default Books