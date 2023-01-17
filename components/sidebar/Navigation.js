import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navigation = ({ list, setSidebar }) => {
  return (
    <ul className="w-full h-screen flex flex-col items-center justify-center">
      {list.map((item, index) => (
        <li key={index}>
          <ScrollLink
            to={item.target}
            className="flex flex-col items-center justify-center my-3 font-bold text-slate-600 dark:text-slate-400 cursor-pointer"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => setSidebar(false)}
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
  );
};

export default Navigation;
