// CartSideBar.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

const CartSideBar = ({ onClose }) => {
  const { cartItems = [], addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce((s, i) => s + (i.price * (i.quantity || 0)), 0);
  const priceFmt = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });

  return (
    <motion.aside
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
      className="h-full w-full sm:w-[380px] bg-primary-100 shadow-soft p-4 flex flex-col"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Your cart</h2>
        <button onClick={onClose} aria-label="Close cart" className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-300">
          <IoClose size={20} />
        </button>
      </div>

      <div className="mt-4 flex-1 overflow-y-auto space-y-3">
        {cartItems.length === 0 ? (
          <div className="h-60 flex items-center justify-center text-neutralSoft-700">Your cart is empty.</div>
        ) : (
          cartItems.map((item) => {
            const img = item.images?.[0] ?? "/placeholder.png";
            return (
              <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                <div className="w-20 h-16 shrink-0 overflow-hidden rounded-md bg-neutralSoft-50">
                  <img src={img} alt={item.title ?? "product"} className="w-full h-full object-contain" loading="lazy" />
                </div>

                <div className="flex-1">
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-neutralSoft-300">{priceFmt.format(item.price)}</div>
                  <div className="text-xs text-neutralSoft-300">Qty: {item.quantity}</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button onClick={() => addToCart(item)} aria-label={`Increase ${item.title}`} className="px-2 py-1 rounded bg-neutralSoft-100 focus:ring-2 focus:ring-accent-300">+</button>
                  <button onClick={() => removeFromCart(item)} aria-label={`Decrease ${item.title}`} className="px-2 py-1 rounded bg-neutralSoft-100 focus:ring-2 focus:ring-accent-300">-</button>
                  <button onClick={() => deleteFromCart(item.id)} aria-label={`Remove ${item.title}`} className="px-2 py-1 rounded bg-accent-500 text-white text-xs">Remove</button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Subtotal</div>
          <div className="text-sm font-semibold">{priceFmt.format(subtotal)}</div>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 py-2 rounded-lg bg-accent-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-accent-300">Checkout</button>
          <button onClick={() => { /* optional clear cart */ }} className="py-2 px-3 rounded-lg border text-sm">Clear</button>
        </div>
      </div>
    </motion.aside>
  );
};

export default CartSideBar;
