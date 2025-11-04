// ProductCard.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <article className="bg-white/80 p-3 rounded-lg shadow hover:shadow-lg flex flex-col items-center">
      <img
        src={product.images?.[0] || "/placeholder.png"}
        alt={`${product.title} image`}
        className="h-40 w-full object-cover rounded mb-3"
        loading="lazy"
      />
      <h3 className="text-sm font-semibold text-center">{product.title}</h3>
      <p className="text-gray-700 mt-1">{product.brand}</p>
      <p className="mt-2 font-medium">{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Add to cart
      </button>
    </article>
  );
};

export default React.memo(ProductCard);
