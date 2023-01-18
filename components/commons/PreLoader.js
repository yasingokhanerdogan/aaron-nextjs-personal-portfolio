import React, { useEffect, useState } from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

import Data from "../../mockups/data.json";

const PreLoader = () => {
  const [hidden, setHidden] = useState(false);
  const { currentTheme, switchMounted } = ThemeSwitch();

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 500);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-slate-300 dark:bg-slate-900 z-50 transition-all ${
        hidden ? "opacity-0 invisible" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {switchMounted && (
          <Image
            src={
              currentTheme === "dark"
                ? Data.settings.logoDark
                : Data.settings.logoLight
            }
            width={75}
            height={75}
            alt={Data.settings.name}
          />
        )}
        <h5 className="font-Fira text-sm mt-5 text-slate-700 dark:text-slate-200">
          Loading...
        </h5>
      </div>
    </div>
  );
};

export default PreLoader;
