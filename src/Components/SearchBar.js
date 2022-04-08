import React from "react";

const SearchBar = () => {

  const handleClick = () => {
    alert('This Search button has been added for just for view purpose as the main task of this hackathon is to fetch the data from the database')
  }
  return (
    <div className="header-bar col-sm-12">
      <div className="bar-and-search">
        <input
          type="text"
          className="search form-control mt-3 pl-5"
          placeholder="Start your Search here..."
          autoComplete="on"
        />
        <button onClick={handleClick} className="search-btn btn btn-danger">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
