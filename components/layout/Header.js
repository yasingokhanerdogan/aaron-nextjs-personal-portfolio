import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { SidebarContext } from "../../context";
import ThemeSwitch from "../commons/ThemeSwitch";

import { BiMenuAltRight } from "react-icons/bi";

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
            <a href="/" className="flex items-center justify-center">
              <Image
                src={
                  currentTheme === "dark"
                    ? Data.settings.logoDark
                    : Data.settings.logoLight
                }
                width={45}
                height={45}
                alt={Data.settings.name}
              />
            </a>
          )}
        </div>
        <div className="flex items-center">
          <ul className="flex items-center list-none hidden lg:flex">
            {NavList.map((item, index) => (
              <li key={index} className="px-4 py-2">
                <ScrollLink
                  to={item.target}
                  className="text-slate-600 dark:text-slate-400 cursor-pointer hover:text-cyan-500 dark:hover:text-cyan-500 transition-all font-Fira"
                  spy={true}
                  smooth={true}
                  offset={-25}
                >
                  <span className="text-cyan-500">0{index + 1}. </span>
                  {item.title}
                </ScrollLink>
              </li>
            ))}
            <li className="ml-3">
              <a
                href="/"
                target="_blank"
                className="px-4 py-3 border border-cyan-500 rounded-md text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                Resume
              </a>
            </li>
          </ul>
          <ThemeButton />
          <button
            className="p-2 text-slate-600 dark:text-slate-400 lg:hidden"
            onClick={() => Sidebar.setActive(true)}
          >
            <BiMenuAltRight size={36} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
