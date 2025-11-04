// ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mx-10 my-5 p-5 ">
      <ProductCard />
    </div>
  );
};

export default ProductGrid;
