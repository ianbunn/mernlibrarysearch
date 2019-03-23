import React, { Component } from "react";
import API from "../../utils/API"
import SearchInput from "../SearchInput"

class BooksForm extends Component {
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
                    search: "",
                })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;

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
            <div>
                <SearchInput 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
}

export default BooksForm