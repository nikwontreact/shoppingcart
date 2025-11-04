// ProductCard.jsx
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductCard = () => {
  const { productData } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {productData.map((product) => (
        <div
          key={product.id}
          className="bg-blur flex flex-col items-center p-4 rounded-lg shadow-md outline outline-"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-cover h-48 w-48 mb-4 rounded"
          />
          <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => {
              addToCart(product);
              console.log("Added to cart", product);
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
