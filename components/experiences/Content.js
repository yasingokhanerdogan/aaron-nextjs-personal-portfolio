import React from "react";

const Content = ({ data, activeIndex }) => {
  return (
    <div className="basis-4/4 mt-10 md:basis-3/4 md:mt-0">
      <h3 className="text-xl text-slate-700 dark:text-slate-400 font-bold">
        {data[activeIndex].position}
      </h3>
      <div className="text-sm text-slate-600 dark:text-slate-500 font-semibold mb-5">
        {data[activeIndex].date}
      </div>
      <p className="text-md text-slate-500 dark:text-slate-400">
        {data[activeIndex].description}
      </p>
    </div>
  );
};

export default Content;
