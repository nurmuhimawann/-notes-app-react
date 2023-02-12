import React from "react";
import SearchBar from "../SearchBar/SearchBar";


function Header() {
    return (
        <header className="note-app__header">
            <h1>Notes</h1>
            <SearchBar />
        </header>
    )
}

export default Header;