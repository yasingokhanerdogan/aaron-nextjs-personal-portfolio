import React from "react";
import { Footer } from "../components";

const ErrorLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default ErrorLayout;
