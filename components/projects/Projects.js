import React from "react";
import { SectionLayout as Section } from "../../layouts";
import ListItem from "./ListItem";
import Data from "../../mockups/data.json";

const Projects = () => {
  return (
    <Section id="project-section" width="max-w-5xl" order="4" title="Projects">
      <div className="w-full">
        <ul className="grid grid-cols-12 items-center gap-5">
          {Data.projects.map((item, index) => {
            return <ListItem key={index} data={item} />;
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
