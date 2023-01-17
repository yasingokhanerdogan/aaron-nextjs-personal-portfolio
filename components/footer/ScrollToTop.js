import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const scrollToTopFunc = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 500 ? setScrollToTop(true) : setScrollToTop(false);
    });
  }, []);

  return (
    <button
      className={`fixed bottom-10 right-5 md:bottom-20 md:right-20 rounded-full items-center justify-center p-4 bg-slate-400 hover:text-slate-100 hover:bg-slate-500 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-500 transition-all ${
        scrollToTop ? "flex" : "hidden"
      }`}
      onClick={scrollToTopFunc}
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollToTop;
