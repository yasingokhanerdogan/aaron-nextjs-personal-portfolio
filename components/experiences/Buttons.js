import React from "react";

const Buttons = ({ list, active }) => {
  return (
    <>
      {list.map((item, index) => (
        <li key={index}>
          <button
            className={`w-full border-l-2 px-6 py-3 ${
              active.activeIndex === index
                ? "text-slate-50 bg-slate-400 border-slate-500 dark:bg-slate-700 dark:border-slate-400"
                : "text-slate-700 dark:text-slate-400 border-slate-400 dark:border-slate-600"
            }`}
            onClick={() => active.setActiveIndex(index)}
          >
            {item.company}
          </button>
        </li>
      ))}
    </>
  );
};

export default Buttons;
