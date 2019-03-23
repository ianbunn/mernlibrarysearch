import React from "react"

// Search form input for user's search term
function SearchInput(props) {
    return (
        <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
                // Handling state change on form input
                onChange={props.handleInputChange}
                // Saving state value for search term
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for a Book"
                id="search"
            />
            {/* Handling form submit after button is clicked and triggering API call to Google to GET books based on the search term*/}
            <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                Search
            </button>
        </div>
    )
}

export default SearchInput