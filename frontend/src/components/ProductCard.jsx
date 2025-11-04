// ProductCard.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "motion/react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const priceFmt = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <motion.article className="bg-accent-50/60 rounded-xl shadow-card p-3 flex flex-col gap-3 "
    
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}  
    >
      <div className="w-full aspect-4/3 overflow-hidden rounded-md bg-neutralSoft-50">
        <img
          src={product?.images?.[0] ?? "/placeholder.png"}
          alt={product?.title ?? "Product image"}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-neutralSoft-700 truncate">
          {product.title}
        </h3>
        <p className="text-xs text-neutralSoft-300 mt-1 line-clamp-2">
          {product.description}
        </p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-medium text-neutralSoft-700">
          {priceFmt.format(product.price)}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-500 text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
          aria-label={`Add ${product.title} to cart`}
        >
          Add
        </button>
      </div>
    </motion.article>
  );
};

export default ProductCard;
