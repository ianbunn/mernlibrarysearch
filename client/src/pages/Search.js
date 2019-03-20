import React, { Component } from "react"
// import API from "../utils/API"

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    }

    render() {
        return (
            <div>
                <p>hello from search page</p>
            </div>
        )
    }
}

export default Search