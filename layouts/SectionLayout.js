import React from "react";

const SectionLayout = ({ id, width, order, title, children }) => {
  return (
    <section id={id} className={`w-full ${width} mx-auto py-24`}>
      <div className="relative flex items-center justify-start section-title after:bg-slate-400 dark:after:bg-slate-500">
        <h2 className="bg-slate-300 dark:bg-slate-900 text-3xl lg:text-4xl font-Fira text-slate-700 dark:text-slate-400 mb-10 pr-16">
          <span className="text-cyan-500">{order}.</span>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
