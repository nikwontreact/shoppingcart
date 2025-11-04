// Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import { CartProvider } from "../context/CartProvider";
import { SideBarProvider } from "../context/SideBarProvider";

const Home = () => {
  return (
    <SideBarProvider>
      <CartProvider>
        <div className="min-h-screen bg-linear-to-b from-pink-400 to-teal-400/80 flex flex-col">
          <Navbar />
          <main className="grow p-4">
            <ProductGrid />
          </main>
        </div>
      </CartProvider>
    </SideBarProvider>
  );
};

export default Home;
