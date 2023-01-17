import React from "react";

import { BsFolder2Open, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const ListItem = ({ data }) => {
  return (
    <li className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="bg-slate-400 p-7 rounded-md hover:shadow-lg transition-all">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <BsFolder2Open size={27} className="text-cyan-600 dark:text-cyan-700" />
            <ul className="flex gap-x-5">
              <li>
                <a href={data.githubLink} className="text-slate-800 hover:text-cyan-600 transition-all">
                  <BsGithub size={27} />
                </a>
              </li>
              <li>
                <a href={data.externalLink} className="text-slate-800 hover:text-cyan-600 transition-all">
                  <FiExternalLink size={27} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">
              <a
                href={data.externalLink}
                className="text-slate-600 hover:text-cyan-600 dark:text-slate-700 transition-all"
              >
                {data.title}
              </a>
            </h3>
            <p className="text-slate-600">{data.description}</p>
          </div>
          <p className="mt-3 flex items-center font-Fira text-slate-700">
            {data.technologies}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
