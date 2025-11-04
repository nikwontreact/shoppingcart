import React from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <div className="bg-red-900 h-screen">
      <Navbar />
      <ProductGrid />
    </div>
  );
};

export default Home;
