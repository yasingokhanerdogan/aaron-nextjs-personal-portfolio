import React from "react";
import { MainLayout } from "../layouts";
import Data from "../mockups/data.json";
import {
  Hello,
  About,
  Works,
  Experiences,
  Projects,
  Contact,
} from "../components";
import Head from "next/head";

const OnePage = () => {
  return (
    <>
      <Head>
        <title>{Data.settings.title}</title>
        <meta name="description" content={Data.settings.description} />
        <link ref="icon" href={Data.settings.favicon} />
      </Head>

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
