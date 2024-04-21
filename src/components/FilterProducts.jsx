import React from 'react';

const FilterProducts = ({ onChange }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    onChange(value); 
  };

  return (
    <div>
      <label htmlFor="filter">Filter by:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="out-of-stock">Out of stock</option>
      </select>
    </div>
  );
};

export default FilterProducts;
