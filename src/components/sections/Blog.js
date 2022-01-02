import React from "react";
import Section from "../Section";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitle } from "../Typography";
import { ButtonWrapper, TitleWrapper } from "../Wrappers";
import { Link } from "gatsby";
// import styled from "styled-components";
// import { Center } from "../Wrappers";

const SectionBlog = () => {
  return (
    <Section id="blog">
      <TitleWrapper>
        <SectionTitle>Latest blog post:</SectionTitle>
      </TitleWrapper>
      <StaticImage src="../../images/Blog/London.jpg" alt="view of London" />
      <h3>2021 - A Year in Review</h3>
      <ButtonWrapper>
        <Link to="/blogLayout/">Read Latest &raquo;</Link>
        <Link to="/">View All &raquo;</Link>
      </ButtonWrapper>
    </Section>
  );
};

export default SectionBlog;
