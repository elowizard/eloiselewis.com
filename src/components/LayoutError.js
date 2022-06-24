import React from "react";
import Navbar from "./Navbar";
import GlobalStyle from "./GlobalStyle";

const LayoutError = ({ children, navbar, ...props }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar kind={navbar} />
      <main {...props}>{children}</main>
    </>
  );
};

export default LayoutError;
