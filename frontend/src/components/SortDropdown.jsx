// import React from 'react';

// const SortDropdown = ({ onSort }) => {
//   return (
//     <select onChange={(e) => onSort(e.target.value)}>
//       <option value="Date">Date (Newest First)</option>
//       <option value="Quantity">Quantity</option>
//       <option value="Customer Name">Customer Name (A-Z)</option>
//     </select>
//   );
// };

// export default SortDropdown;

import React from 'react';
import './SortDropdown.css';

const SortDropdown = ({ onSort }) => {
  return (
    <div className="sort-container">
      <label className="sort-label">Sort by:</label>
      <select onChange={(e) => onSort(e.target.value)} className="sort-select">
        <option value="Date">📅 Date (Newest First)</option>
        <option value="Quantity">📊 Quantity</option>
        <option value="Customer Name">👤 Customer Name (A-Z)</option>
      </select>
    </div>
  );
};

export default SortDropdown;