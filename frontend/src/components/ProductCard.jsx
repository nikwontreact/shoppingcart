import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductCard = () => {
  const { productData } = useContext(ProductContext);
  console.log(productData.products);
  return (
    <div className="flex bg-amber-300 flex-col items-center p-4 rounded-lg shadow-md">
      {productData.map((product) => (
        <div key={product.id} className="mb-4">
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-cover h-48 w-48"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <button className="bg-blue-500 hover: outline-2 hover: outline-cyan-50">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
