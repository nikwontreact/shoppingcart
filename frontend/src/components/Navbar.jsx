// Navbar.jsx
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import CartSideBar from "./CartSideBar";

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <>
      <nav className="h-16 bg-pink-100 sticky top-0 flex items-center px-4 justify-between shadow-md z-50 select-none ">
        <h1 className="text-2xl font-bold text-gray-800 ">ShoppingCart</h1>
        <CiShoppingCart
          size={28}
          color="black"
          className="cursor-pointer"
          onClick={() => setCartIsOpen(!cartIsOpen)}
          aria-label="Toggle cart sidebar"
        />
      </nav>

      {cartIsOpen && (
        <>
          {/* Overlay for better UX */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setCartIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-[350px] max-w-full z-50 shadow-lg">
            <CartSideBar />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
