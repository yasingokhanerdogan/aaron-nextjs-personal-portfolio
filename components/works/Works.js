import React from "react";
import { SectionLayout as Section } from "../../layouts";
import List from "./WorkList";
import Data from "../../mockups/data.json";

const Works = () => {
  return (
    <Section id="work-section" width="max-w-5xl" order="3" title="Works">
      <div className="flex flex-col items-center">
        <List data={Data.works} />
      </div>
    </Section>
  );
};

export default Works;
