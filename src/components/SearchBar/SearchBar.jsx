import React from "react";

function SearchBar({ onSearch }) {
    return (
        <div className="note-search">
            <input type="text" id="search" onChange={(event) => {onSearch(event.target.value)}} placeholder="Search..." />
        </div>
    )
}

export default SearchBar;