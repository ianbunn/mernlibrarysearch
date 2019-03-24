import React from "react"

// Search form input for user's search term
function SearchInput(props) {
    return (
        <div className="form-group">
            <label htmlFor="search"><h5>Search:</h5></label>
            {/* Search input for book */}
            <input
                // Handling state change on input
                onChange={props.handleInputChange}
                // Saving state value for search term
                value={props.value}
                id="search"
                name="search"
                type="text"
                className="form-control"
                placeholder="Enter author or book name"
            />

            {/* Handling form submit after button is clicked and triggering API call to Google to GET books based on the search term*/}
            <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                Find Books
            </button>
        </div>
    )
}

export default SearchInput