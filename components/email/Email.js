import React from "react";
import Data from "../../mockups/data.json";

const Email = () => {
  return (
    <div className="email-area fixed bottom-0 right-6 hidden md:flex">
      <div className="container relative w-full after:bg-slate-500">
        <a
          href={`mailto:${Data.settings.email}`}
          className="text-slate-600 dark:text-slate-400 font-Fira mb-5 transition-all text-md hover:text-cyan-500 dark:hover:text-cyan-500 hover:-translate-y-2"
        >
          {Data.settings.email}
        </a>
      </div>
    </div>
  );
};

export default Email;
