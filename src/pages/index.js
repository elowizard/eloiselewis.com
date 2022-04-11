import React from "react";
import Layout from "./../components/Layout";
import SectionAbout from "./../components/sections/About";
import SectionResearch from "../components/sections/Research";
import SectionPhotography from "../components/sections/Photography";
import SectionContact from "../components/sections/Contact";
import SectionBlog from "../components/sections/BlogSection";

const IndexPage = () => {
  return (
    <Layout>
      <SectionAbout />
      <SectionBlog />
      <SectionPhotography />
      <SectionResearch />
      <SectionContact />
    </Layout>
  );
};

export default IndexPage;
