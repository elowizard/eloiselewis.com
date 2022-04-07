import React from "react";
import Section from "../Section";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitle } from "../Typography";
import { ButtonWrapper, TitleWrapper } from "../Wrappers";
import { Link } from "gatsby";
import styled from "styled-components";

const SectionBlog = () => {
  return (
    <Section id="blog">
      <TitleWrapper>
        <SectionTitle>Latest blog post:</SectionTitle>
      </TitleWrapper>
      <LatestArticle as={Link} to="/2021-a-year-in-review/">
        <LatestImage>
          <StaticImage
            src="../../images/blog2/london-panorama.jpg"
            alt="view of London"
          />
        </LatestImage>
        <LatestTitle>2021 - A Year in Review</LatestTitle>
      </LatestArticle>
      <ButtonWrapper>
        <Link to="/all-blogs/">All posts &raquo;</Link>
        {/* <Link to="/">View All &raquo;</Link> */}
      </ButtonWrapper>
    </Section>
  );
};

export default SectionBlog;

const LatestImage = styled.div`
  opacity: 0.7;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  transition: all 1s ease;

  /* @media (max-width: 600px) {
    opacity: 1;
  } */
`;

const LatestTitle = styled.h3`
  font-size: 48px;
  color: #5c5c5c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  white-space: nowrap;
  text-decoration: none;
  transition: all 1s ease;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    /* position: relative; */
    font-size: 24px;
    /* transform: 0; */
    /* text-align: center; */
    /* padding-top: 8px; */
  }

  display: inline-block;
  cursor: pointer;

  ::after {
    content: "";
    display: block;
    margin-top: 8px;
    margin-left: auto;
    margin-right: auto;
    height: 4px;
    width: 0px;
    background-color: #5c5c5c;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    transition: all 1s ease;
  }
`;

const LatestArticle = styled.div`
  position: relative;
  display: inline-block;
  /* padding-top: 30px;
  padding-bottom: 30px; */
  margin-top: 50px;
  margin-bottom: 50px;
  text-decoration: none;

  @media (max-width: 800px) {
    margin-top: 20vh;
  }
  :hover {
    ${LatestImage} {
      opacity: 1;
    }

    ${LatestTitle} {
      color: #e5e5e5;

      ::after {
        width: 100%;
        background-color: #e5e5e5;
      }
    }
  }
`;
