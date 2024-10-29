import React from 'react';
import ReactDOM from 'react-dom/client';

const Search = () => {
return(
  <div className="top-panel d-flex">
    <input
      type="text"
      placeholder="Type to search"
      className="form-control search-input"
    />
    <div className="btn-group">
      <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">
        Done
      </button>
    </div>
  </div>
)
}

export default Search;