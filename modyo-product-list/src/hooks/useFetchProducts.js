import { useEffect, useState } from "react";
import axios from "axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return { products, isLoading, error };
};

export default useFetchProducts;