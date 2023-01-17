import React from "react";
import WorkItem from "./WorkItem";

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          description={item.description}
          technologies={item.technologies}
          githubLink={item.githubLink}
          externalLink={item.externalLink}
        />
      ))}
    </ul>
  );
};

export default List;
