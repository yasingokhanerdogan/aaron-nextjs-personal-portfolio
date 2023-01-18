import React, { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { SidebarContext as context } from "../../context";
import { VscChromeClose } from "react-icons/vsc";

const Sidebar = () => {
  const SidebarContext = useContext(context);
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
    <aside
      className={`fixed top-0 w-72 h-screen z-30 transition-all bg-slate-300 dark:bg-slate-900 shadow-xl ${
        SidebarContext.active ? "right-0" : "-right-80"
      }`}
    >
      <div className="flex">
        <button
          className="absolute top-5 right-8 text-slate-600 dark:text-slate-400"
          onClick={() => SidebarContext.setActive(false)}
        >
          <VscChromeClose size={27} />
        </button>
        <ul className="w-full h-screen flex flex-col items-center justify-center">
          {NavList.map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={item.target}
                className="flex flex-col items-center justify-center my-3 font-bold text-slate-600 dark:text-slate-400 cursor-pointer"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={() => SidebarContext.setActive(false)}
              >
                <span className="text-cyan-500 font-Fira">0{index + 1}.</span>
                {item.title}
              </ScrollLink>
            </li>
          ))}
          <li className="flex flex-col items-center justify-center my-5">
            <a
              href="/"
              target="_blank"
              className="px-4 py-3 border border-cyan-500 rounded-md text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
