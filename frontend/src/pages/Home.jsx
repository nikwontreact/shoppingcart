import React from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import { CartProvider } from "../context/CartProvider";

const Home = () => {
  return (
    <div className="bg-red-900 h-screen">
      <CartProvider>
        <Navbar />
        <ProductGrid />
      </CartProvider>
    </div>
  );
};

export default Home;
