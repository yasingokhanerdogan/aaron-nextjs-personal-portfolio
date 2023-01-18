import React, { useState } from "react";
import { SectionLayout as Section } from "../../layouts";

import Data from "../../mockups/data.json";

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      id="experience-section"
      width="max-w-4xl"
      order="2"
      title="Experiences"
    >
      <div className="flex flex-col md:flex-row gap-x-10">
        <div className="basis-4/4 md:basis-1/4">
          <ul>
            {Data.experiences.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full border-l-2 px-6 py-3 ${
                    activeIndex === index
                      ? "text-slate-50 bg-slate-400 border-slate-500 dark:bg-slate-700 dark:border-slate-400"
                      : "text-slate-700 dark:text-slate-400 border-slate-400 dark:border-slate-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.company}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-4/4 mt-10 md:basis-3/4 md:mt-0">
          <h3 className="text-xl text-slate-700 dark:text-slate-400 font-bold">
            {Data.experiences[activeIndex].position}
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-500 font-semibold mb-5">
            {Data.experiences[activeIndex].date}
          </div>
          <p className="text-md text-slate-500 dark:text-slate-400">
            {Data.experiences[activeIndex].description}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
