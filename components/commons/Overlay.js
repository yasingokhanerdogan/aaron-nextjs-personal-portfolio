import React, { useContext } from "react";
import { SidebarContext } from "../../context";

const Overlay = () => {
  const Sidebar = useContext(SidebarContext);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-20 backdrop-blur-md transition-all ${
        Sidebar.active ? "flex" : "hidden"
      }`}
      onClick={() => Sidebar.setActive(false)}
    ></div>
  );
};

export default Overlay;
