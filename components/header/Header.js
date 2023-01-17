import React, { useEffect, useState, useContext } from "react";
import { SidebarContext } from "../../context";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ToggleSidebar from "./ToggleSidebar";
import ThemeSwitch from "./ThemeSwitch";
import Data from "../../mockups/data.json";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const Sidebar = useContext(SidebarContext);
  const { ThemeButton, currentTheme, switchMounted } = ThemeSwitch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const NavList = [
    {
      target: "about-section",
      title: "About",
    },
    {
      target: "experience-section",
      title: "Experiences",
    },
    {
      target: "work-section",
      title: "Works",
    },
    {
      target: "project-section",
      title: "Projects",
    },
    {
      target: "contact-section",
      title: "Contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all bg-slate-300 dark:bg-slate-900 z-10 ${
        sticky ? "h-16 shadow-md" : "h-24"
      }`}
    >
      <div className="flex items-center justify-between h-full px-5">
        <div className="flex items-center">
          {switchMounted && (
            <Logo
              target="/"
              src={
                currentTheme === "dark"
                  ? Data.settings.logoDark
                  : Data.settings.logoLight
              }
              width={45}
              height={45}
              alt="Aaron Logo"
            />
          )}
        </div>
        <div className="flex items-center">
          <Navigation list={NavList} />
          <ThemeButton />
          <ToggleSidebar click={() => Sidebar.setActive(true)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
