import React from "react";
import { SectionLayout as Section } from "../../layouts";

import Data from "../../mockups/data.json";

const About = () => {
  return (
    <Section id="about-section" width="max-w-4xl" order="1" title="About">
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-7/12 md:mr-6 order-last md:order-first flex items-center">
          <p className="text-slate-500 dark:text-slate-400">
            {Data.settings.aboutText}
          </p>
        </div>
        <div className="basis-full md:basis-5/12 mb-10 md:mb-0">
          <img
            src={Data.settings.aboutImage}
            className="rounded-lg"
            alt={Data.settings.name}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
