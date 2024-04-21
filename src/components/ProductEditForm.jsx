import React, { useState } from 'react';

const ProductEditForm = ({ product, onSave, onCancel }) => {
  const [title, setTitle] = useState(product.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ProductEditForm;
