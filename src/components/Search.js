import React from "react";

function Search(props) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => props.setSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default Search;
