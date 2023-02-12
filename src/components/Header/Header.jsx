import React from "react";
import SearchBar from "../SearchBar/SearchBar";


function Header({ onSearch }) {
    return (
        <header className="note-app__header">
            <h1>Notes</h1>
            <SearchBar onSearch={onSearch} />
        </header>
    )
}

export default Header;