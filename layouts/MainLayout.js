import React from "react";
import {
  Header,
  Social,
  Email,
  Sidebar,
  Footer,
  Preloader,
} from "../components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Preloader />
      <Header />
      <Sidebar />
      <div>
        <Social />
        <Email />
        <div className="px-5 md:px-20 w-full">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
