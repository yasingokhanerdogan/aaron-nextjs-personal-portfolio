import React from "react";
import * as BS from "react-icons/bs";

import Data from "../../mockups/data.json";

const Social = () => {
  return (
    <div className="social-area fixed bottom-0 left-6 hidden md:flex">
      <div className="container relative w-full after:bg-slate-500">
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
      </div>
    </div>
  );
};

export default Social;
