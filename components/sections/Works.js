import React from "react";
import { SectionLayout as Section } from "../../layouts";

import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import Data from "../../mockups/data.json";

const Works = () => {
  return (
    <Section id="work-section" width="max-w-5xl" order="3" title="Works">
      <div className="flex flex-col items-center">
        <ul>
          {Data.works.map((item, index) => (
            <li key={index} className="mb-12">
              <div className="flex justify-between gap-6">
                <div className="hidden lg:flex basis-6/12">
                  <a href={item.externalLink} target="_blank">
                    <img
                      src={item.image}
                      className="rounded-lg"
                      alt={item.title}
                    />
                  </a>
                </div>
                <div className="flex flex-col items-start basis-12/12 lg:items-end lg:justify-center lg:basis-6/12">
                  <p className="text-cyan-500 font-Fira">{item.subTitle}</p>
                  <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-all mb-3">
                    <a href={item.externalLink} target="_blank">
                      {item.title}
                    </a>
                  </h3>
                  <p className="bg-slate-400 dark:bg-slate-700 text-slate-700 dark:text-slate-400 p-5 rounded-lg text-left lg:text-right">
                    {item.description}
                  </p>
                  <p className="mt-3 text-slate-500 dark:text-slate-400">
                    {item.technologies}
                  </p>
                  <div className="flex items-center justify-end">
                    <a
                      href={item.githubLink}
                      title="Github"
                      target="_blank"
                      className="m-3 text-slate-700 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-500 hover:-translate-y-1 transition-all"
                    >
                      <BsGithub size={24} />
                    </a>
                    <a
                      href={item.externalLink}
                      title="External Link"
                      target="_blank"
                      className="m-3 text-slate-700 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-500 hover:-translate-y-1 transition-all"
                    >
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Works;
