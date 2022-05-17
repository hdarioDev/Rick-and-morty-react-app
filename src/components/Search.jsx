import React from "react";
import "../styles/Search.scss";

export const Search = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="Search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
