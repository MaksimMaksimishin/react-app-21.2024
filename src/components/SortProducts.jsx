import React from 'react';

const SortProducts = ({ onChange }) => {
  const handleSortChange = (e) => {
    const value = e.target.value;
    onChange(value); 
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="title">Title</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default SortProducts;
