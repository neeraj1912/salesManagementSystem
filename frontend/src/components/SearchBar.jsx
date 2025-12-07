// import React from 'react';

// const SearchBar = ({ onSearch }) => {
//   const handleChange = (e) => {
//     onSearch(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Search by Customer Name or Phone..."
//       onChange={handleChange}
//     />
//   );
// };

// export default SearchBar;
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, value }) => {
  // If value prop is provided, use it. Otherwise retain local state for uncontrolled usage (optional, but good for flexibility)
  // However, for this specific app sync, we will rely on the parent passing the value if we want sync.
  // NOTE: To avoid breaking existing usage where value might not be passed, we can default to internal state or require it.
  // Given the plan, I will make it fully controlled if value is passed, or purely internal if not.
  
  const [internalValue, setInternalValue] = useState('');
  
  const displayValue = value !== undefined ? value : internalValue;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (value === undefined) {
        setInternalValue(newValue);
    }
    onSearch(newValue);
  };

  const handleClear = () => {
    if (value === undefined) {
        setInternalValue('');
    }
    onSearch('');
  };

  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search by Customer Name or Phone..."
        value={displayValue}
        onChange={handleChange}
        className="search-input"
      />
      {displayValue && (
        <button className="clear-search" onClick={handleClear} type="button">
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;