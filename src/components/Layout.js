import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

const Layout = ({ children, navbar, ...props }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar kind={navbar} />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
