import React from "react";
import { SectionLayout as Section } from "../../layouts";
import { BsFolder2Open, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import Data from "../../mockups/data.json";

const Projects = () => {
  return (
    <Section id="project-section" width="max-w-5xl" order="4" title="Projects">
      <div className="w-full">
        <ul className="grid grid-cols-12 items-center gap-5">
          {Data.projects.map((item, index) => (
            <li key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-slate-400 p-7 rounded-md hover:shadow-lg transition-all">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <BsFolder2Open
                      size={27}
                      className="text-cyan-600 dark:text-cyan-700"
                    />
                    <ul className="flex gap-x-5">
                      <li>
                        <a
                          href={item.githubLink}
                          className="text-slate-800 hover:text-cyan-600 transition-all"
                          target="_blank"
                        >
                          <BsGithub size={27} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={item.externalLink}
                          className="text-slate-800 hover:text-cyan-600 transition-all"
                          target="_blank"
                        >
                          <FiExternalLink size={27} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      <a
                        href={item.externalLink}
                        className="text-slate-600 hover:text-cyan-600 dark:text-slate-700 transition-all"
                        target="_blank"
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                  <p className="mt-3 flex items-center font-Fira text-slate-700">
                    {item.technologies}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
