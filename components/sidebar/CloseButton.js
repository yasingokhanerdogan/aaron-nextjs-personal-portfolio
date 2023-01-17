import React from "react";
import { VscChromeClose } from "react-icons/vsc";

const CloseButton = ({ click }) => {
  return (
    <button className="absolute top-5 right-8 text-slate-600 dark:text-slate-400" onClick={click}>
      <VscChromeClose size={27} />
    </button>
  );
};

export default CloseButton;
