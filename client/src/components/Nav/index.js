import React from "react"
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                All Mighty Book Search
            </a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Saved</a>
                </li>
            </ul>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Search <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Saved</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav
