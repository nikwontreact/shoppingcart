import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //* function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      //^check if item already exists in cart
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        //^if item exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        //^if item doesn't exist, add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  //* function to add item to cart

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      //^check if item already exists in cart
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem.quantity === 1) {
        //^if item quantity is 1, remove item from cart
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        //^if item exists, decrease quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
