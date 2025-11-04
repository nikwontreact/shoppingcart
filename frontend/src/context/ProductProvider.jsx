import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const fetchProductData = useCallback(async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProductData(data.products);
    } catch (err) {
      console.error("Error fetching product data:", err);
    }
  }, []);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <ProductContext.Provider value={{ productData, fetchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
