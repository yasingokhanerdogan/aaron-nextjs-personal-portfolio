import React, { createContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  const values = {
    active,
    setActive,
  };

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export default SidebarContext;
