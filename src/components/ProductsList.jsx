// ProductsList.jsx
import React, { useState } from 'react';
import { useProductContext } from '../hooks/useProductsContext';
import ProductEditForm from './ProductEditForm';

const ProductsList = () => {
  const { products, setProducts } = useProductContext();
  const [editProductId, setEditProductId] = useState(null);

  const handleDeleteProduct = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts(prevProducts => prevProducts.map(product => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      }
      return product;
    }));
    setEditProductId(null);
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
  };

  return (
    <div className="products-list">
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          {editProductId === product.id ? (
            <ProductEditForm
              product={product}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              <div>{product.title}</div>
              <button onClick={() => setEditProductId(product.id)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;



