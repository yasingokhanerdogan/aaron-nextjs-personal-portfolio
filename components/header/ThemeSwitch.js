import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [switchMounted, setSwitchMounted] = useState(false);

  useEffect(() => {
    setSwitchMounted(true);
  }, []);

  const ThemeButton = () => {
    if (!switchMounted) return null;

    return (
      <button
        className="mx-4 flex item-center justify-center text-slate-600 dark:text-slate-400"
        onClick={() =>
          currentTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {currentTheme === "dark" ? (
          <BsSun size={32} />
        ) : (
          <MdOutlineDarkMode size={32} />
        )}
      </button>
    );
  };

  return { ThemeButton, currentTheme, setTheme, switchMounted };
};

export default ThemeSwitch;
