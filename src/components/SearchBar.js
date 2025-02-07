import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);  
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for recipes..."
        className="form-control w-50 p-3 border rounded shadow-sm"
      />
      <button className="btn btn-primary ms-2" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
