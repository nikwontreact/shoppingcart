import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import CartSideBar from "../components/CartSideBar";
import { CartProvider } from "../context/CartProvider";
const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-linear-to-b from-primary-300 to-accent-300/40">
        <Navbar onOpenCart={() => setCartOpen(true)} />
        {cartOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setCartOpen(false)} />
            <div className="fixed top-0 right-0 z-50 h-full w-full sm:w-[380px]">
              <CartSideBar onClose={() => setCartOpen(false)} />
            </div>
          </>
        )}
        <main className="container py-6 mx-auto">
          <ProductGrid />
        </main>
      </div>
    </CartProvider>
  );
};

export default Home;