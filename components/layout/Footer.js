import React from "react";

import Data from "../../mockups/data.json";

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="w-full h-32">
      <div className="h-full flex items-center justify-center">
        <p className="flex flex-col items-center text-slate-500">
          {Data.settings.footerText}
          <span>&copy; {currentDate.getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
