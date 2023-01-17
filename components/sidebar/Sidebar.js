import React, { useContext } from "react";
import { SidebarContext as context } from "../../context";
import CloseButton from "./CloseButton";
import Navigation from "./Navigation";

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
        <CloseButton click={() => SidebarContext.setActive(false)} />
        <Navigation list={NavList} setSidebar={SidebarContext.setActive} />
      </div>
    </aside>
  );
};

export default Sidebar;
