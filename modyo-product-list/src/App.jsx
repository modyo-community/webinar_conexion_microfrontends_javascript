import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import useFetchProducts from "./hooks/useFetchProducts";

function App({ observable }) {
  //React Hook to fetch products from API
  const { products, isLoading, error} = useFetchProducts();

  const [selectedProducts, setSelectedProducts ] = useState([]);

  function handleAddProduct(product) {
    setSelectedProducts((prev) => [...prev, product])
  }

  useEffect(() => {
    observable.publish(selectedProducts);
  }, [observable, selectedProducts])


  if (isLoading) {
    return (
      <div className="container my-5">
        <div className="center gap-3">Loading...
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>There's an error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="row product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            addProduct={handleAddProduct}
            product={product}/>
        ))}
      </div>
    </div>
  );
}

export default App;

