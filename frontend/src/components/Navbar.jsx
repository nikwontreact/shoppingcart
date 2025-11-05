// Navbar.jsx
import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/CartContext";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";

const Navbar = ({ onOpenCart }) => {
  const { cartItems } = useContext(CartContext);

  const totalQty = cartItems.reduce((s, i) => s + (i.quantity || 0), 0);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-linear-to-b from-primary-100 to-primary-50/40 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" }}
    >
      <nav className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-300 rounded"
            aria-label="Open menu"
          >
            {/* optional menu icon */}
            <span className="sr-only">Open menu</span>
          </button>

          <h1 className="text-lg font-semibold text-neutralSoft-700">
            ShoppingCart
          </h1>

          <img src={logo} alt=""  className="object-contain  size-6"/>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label="Open cart"
            className="relative inline-flex items-center p-2 rounded-lg hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary-300"
          >
            <CiShoppingCart size={22} />
            {totalQty > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                aria-live="polite"
              >
                {totalQty}
              </span>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
