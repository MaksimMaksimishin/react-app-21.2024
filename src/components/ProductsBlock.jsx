// ProductsBlock.jsx
import React from 'react'; 
import AddProductForm from './AddProductForm';
import ProductsInfo from './ProductsInfo';
import ProductsList from './ProductsList';
import FilterProducts from './FilterProducts';
import SortProducts from './SortProducts';
import Pagination from './Pagination';
import { useProductContext } from '../hooks/useProductsContext';

const ProductsBlock = () => {
  const { setProducts } = useProductContext(); 

  const handleAddProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]); 
  };

  return (
    <div className="products-block">
      <div className="add-products">
        <h2>Add New Product</h2>
        {}
        <AddProductForm onAdd={handleAddProduct} />
      </div>
      <FilterProducts />
      <SortProducts />
      <ProductsInfo />
      <ProductsList />
      <Pagination />
    </div>
  );
};

export default ProductsBlock;

