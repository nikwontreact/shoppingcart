// CartProvider.jsx
import React, { useEffect, useState, useMemo } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch {
      // ignore write errors
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (!existing) return prev;
      if (existing.quantity === 1)
        return prev.filter((i) => i.id !== product.id);
      return prev.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const deleteFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const value = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, deleteFromCart }),
    [cartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
