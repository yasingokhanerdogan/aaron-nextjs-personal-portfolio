import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navigation = ({ list }) => {
  return (
    <ul className="flex items-center list-none hidden lg:flex">
      {list.map((item, index) => (
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
  );
};

export default Navigation;
