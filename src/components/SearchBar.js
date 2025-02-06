import React from 'react'

const SearchBar = ({ query, setQuery }) => {
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className="d-flex justify-content-center my-4">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for recipes..."
        className="form-control w-50 p-3 border rounded shadow-sm"
      />
    </div>
  )
}

export default SearchBar