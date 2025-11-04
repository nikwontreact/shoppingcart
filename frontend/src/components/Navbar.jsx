import React from "react";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <div className="h-15 bg-amber-400 sticky top-0 flex items-center px-4   justify-evenly ">
        <h1 className="text-2xl font-bold text-white">ShoppingCart</h1>
        <CiShoppingCart size={28} color="white" />
      </div>
      <div className="flex"></div>
    </>
  );
};

export default Navbar;
