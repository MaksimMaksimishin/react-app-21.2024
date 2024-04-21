import React from 'react';
import { useProductContext } from '../hooks/useProductsContext';

const ProductsInfo = () => {
  const { products } = useProductContext();

  return (
    <div className="products-info">
      products count: {products.length}
    </div>
  );
};

export default ProductsInfo;
