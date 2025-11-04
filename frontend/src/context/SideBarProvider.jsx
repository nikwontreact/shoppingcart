import React, { useState } from "react";
import { SideBarContext } from "./SideBarContext";

export const SideBarProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => setCartIsOpen(true);
  const closeCart = () => setCartIsOpen(false);
  const toggleCart = () => setCartIsOpen((prev) => !prev);

  return (
    <SideBarContext.Provider
      value={{ cartIsOpen, openCart, closeCart, toggleCart }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
