import React from "react";

import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const WorkItem = ({
  title,
  subTitle,
  description,
  image,
  technologies,
  githubLink,
  externalLink,
}) => {
  return (
    <li className="mb-12">
      <div className="flex justify-between gap-6">
        <div className="hidden lg:flex basis-6/12">
          <a href={externalLink}>
            <img src={image} className="rounded-lg" alt={title} />
          </a>
        </div>
        <div className="flex flex-col items-start basis-12/12 lg:items-end lg:justify-center lg:basis-6/12">
          <p className="text-cyan-500 font-Fira">{subTitle}</p>
          <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-all mb-3">
            <a href={externalLink} target="_blank">
              {title}
            </a>
          </h3>
          <p className="bg-slate-400 dark:bg-slate-700 text-slate-700 dark:text-slate-400 p-5 rounded-lg text-left lg:text-right">
            {description}
          </p>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            {technologies}
          </p>
          <div className="flex items-center justify-end">
            <a
              href={githubLink}
              title="Github"
              target="_blank"
              className="m-3 text-slate-700 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-500 hover:-translate-y-1 transition-all"
            >
              <BsGithub size={24} />
            </a>
            <a
              href={externalLink}
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
  );
};

export default WorkItem;
