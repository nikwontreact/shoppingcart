import React from "react";
import Home from "./pages/Home";
import { ProductProvider } from "./context/ProductProvider";

const App = () => {
  return (
    <ProductProvider>
      <Home />
    </ProductProvider>
  );
};

export default App;
