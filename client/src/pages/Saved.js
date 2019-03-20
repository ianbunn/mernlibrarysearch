import React, { Component } from "react"
// import API from "../utils/API"

class Saved extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    }

    render() {
        return (
            <div>
                <p>hello from saved page</p>
            </div>
        )
    }
}

export default Saved