import React from 'react';

const SortDropdown = ({ onSort }) => {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="Date">Date (Newest First)</option>
      <option value="Quantity">Quantity</option>
      <option value="Customer Name">Customer Name (A-Z)</option>
    </select>
  );
};

export default SortDropdown;
