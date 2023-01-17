import React from "react";
import { MainLayout } from "../layouts";
import {
  Hello,
  About,
  Works,
  Experiences,
  Projects,
  Contact,
} from "../components";

const OnePage = () => {
  return (
    <>
      <Hello />
      <About />
      <Experiences />
      <Works />
      <Projects />
      <Contact />
    </>
  );
};

OnePage.Layout = MainLayout;
export default OnePage;
