import React from "react";
import Section from "../Section";
import { StaticImage } from "gatsby-plugin-image";
import { PageTitle } from "../Typography";
import styled from "styled-components";
import { Center } from "../Wrappers";

const SectionContact = () => {
  return (
    <StyledSection id="contact" className="purple">
      <Center>
        <PageTitle as="h2">Find me on...</PageTitle>
      </Center>
      <LinksWrapper>
        <a href="https://github.com/elowizard" target="_blank" rel="noreferrer">
          <StaticImage
            src="../../images/github_grey.svg"
            alt="github logo"
            layout="fixed"
            width={65}
            height={65}
          />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/eloise-lewis-330b22146/"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../../images/linkedin_grey.svg"
            alt="linkedin logo"
            layout="fixed"
            width={65}
            height={65}
          />
          LinkedIn
        </a>
        <a
          href="https://twitter.com/EloiseDoesChem"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../../images/twitter_grey.svg"
            alt="twitter logo"
            layout="fixed"
            width={65}
            height={65}
          />
          Twitter
        </a>
      </LinksWrapper>
    </StyledSection>
  );
};

export default SectionContact;

const StyledSection = styled(Section)`
  height: calc(100% - 150px);
  min-height: calc(100vh - 150px);
  padding-top: 80px;
  padding-bottom: 80px;
  /* box-shadow: inset 0px -4px 10px rgba(0, 0, 0, 0.25); */
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  padding: 50px;

  .gatsby-image-wrapper {
    display: flex;
    align-self: center;
    max-width: 60px;
    max-height: 60px;
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5));
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 20px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
    transition-duration: 0.4s;
    color: #f0f0f2;
    text-decoration: none;
  }

  a:hover {
    transform: translateY(1.5vh);
  }
`;
