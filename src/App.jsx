import { useState } from "react";
import ProductsBlock from "./components/ProductsBlock";
import ProductsProvider from "./context/ProductsContext";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
    { id: 4, title: 'Product 4' },
  ]);

  return (
    <div className="container">
      
      <ProductsProvider value={{ products, setProducts }}>
        <ProductsBlock />
      </ProductsProvider>

      

    </div>
  );
}

export default App;