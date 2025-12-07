import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by Customer Name or Phone..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
