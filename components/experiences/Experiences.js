import React, { useState } from "react";
import { SectionLayout as Section } from "../../layouts";
import Buttons from "./Buttons";
import Content from "./Content";
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
            <Buttons
              list={Data.experiences}
              active={{ activeIndex, setActiveIndex }}
            />
          </ul>
        </div>
        <Content data={Data.experiences} activeIndex={activeIndex} />
      </div>
    </Section>
  );
};

export default Experiences;
