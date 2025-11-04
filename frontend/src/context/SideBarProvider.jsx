import React, {  useState, useContext } from "react";
import 


export const SidebarProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ cartIsOpen, setCartIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);