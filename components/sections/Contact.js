import React from "react";
import Data from "../../mockups/data.json";

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="w-full max-w-xl mx-auto py-24 md:py-48"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-Fira text-cyan-500 text-lg">
          <span>5.</span>Contact
        </h2>
        <h1 className="text-3xl font-bold text-slate-700 dark:text-slate-400 my-8">
          Get In Touch
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400">
          {Data.settings.contactText}
        </p>
        <a
          href={`mailto:${Data.settings.email}`}
          className="mt-5 px-4 py-3 border border-cyan-500 rounded-md text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          Send Mail
        </a>
      </div>
    </section>
  );
};

export default Contact;
