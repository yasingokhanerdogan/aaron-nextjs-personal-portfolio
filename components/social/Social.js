import React from "react";
import Navigation from "./Navigation";

const Social = () => {
  return (
    <div className="social-area fixed bottom-0 left-6 hidden md:flex">
      <div className="container relative w-full after:bg-slate-500">
        <Navigation />
      </div>
    </div>
  );
};

export default Social;
