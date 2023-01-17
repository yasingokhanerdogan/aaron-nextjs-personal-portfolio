import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Data from "../../mockups/data.json";

const Hello = () => {
  return (
    <section id="hello-section" className="w-full max-w-4xl mx-auto h-screen">
      <div className="flex flex-col items-start justify-center w-full h-full">
        <h3 className="font-Fira text-cyan-500 dark:text-cyan-500 text-2xl">
          Hi, My name is,
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 dark:text-slate-400 mt-5">
          {Data.settings.helloTitle}
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 dark:text-slate-500 mt-5">
          {Data.settings.helloSubTitle}
        </h2>
        <p className="mt-5 text-slate-500 dark:text-slate-400 hidden sm:block">
          {Data.settings.helloText}
        </p>
        <ScrollLink
          to="contact-section"
          className="mt-5 px-4 py-3 border border-cyan-500 rounded-md text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          spy={true}
          smooth={true}
          offset={-100}
        >
          Contact Me
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hello;
