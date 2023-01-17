import React from "react";
import { BiMenuAltRight } from "react-icons/bi";

const ToggleSidebar = ({ click }) => {
  return (
    <button
      className="p-2 text-slate-600 dark:text-slate-400 lg:hidden"
      onClick={click}
    >
      <BiMenuAltRight size={36} />
    </button>
  );
};

export default ToggleSidebar;
