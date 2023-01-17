import React from "react";
import Data from "../../mockups/data.json";
import * as BS from "react-icons/bs";

const Navigation = () => {
  return (
    <ul className="flex flex-col items-center list-none mb-5">
      {Data.social.map((item, index) => {
        const SocialIcon = BS[item.icon];
        return (
          <li key={index} className="my-3">
            <a
              href={item.target}
              target="_blank"
              className="flex text-slate-600 dark:text-slate-400 transition-all hover:text-cyan-500 dark:hover:text-cyan-500 hover:-translate-y-1"
            >
              <SocialIcon size={21} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
