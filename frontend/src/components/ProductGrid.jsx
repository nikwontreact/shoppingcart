// ProductGrid.jsx
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { productData } = useContext(ProductContext);

  return (
    <section>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 m-4">
        {productData?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
