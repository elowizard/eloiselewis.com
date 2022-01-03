import React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { FooterText } from "./Typography";

const Footer = () => {
  return (
    <Wrapper>
      <Notice>
        <FooterText>
          Content © 2022 Eloise Lewis. All rights reserved.
        </FooterText>
        <FooterText>
          Design and code (except graphics) are open source on{" "}
          <a
            href="https://github.com/elowizard/eloiselewis.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          . Hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
          .
        </FooterText>
      </Notice>
      <StaticImage
        src="./../images/logo2.svg"
        alt="logo"
        layout="constrained"
        width={160}
        height={160}
      />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 120px;
  position: relative;
  box-shadow: 0px -16px 32px rgba(0, 0, 0, 0.27);

  @media (max-width: 800px) {
    height: 100px;
  }

  .gatsby-image-wrapper {
    width: 160px;
    height: 160px;
    position: absolute;
    top: -80px;
    right: 16px;
    filter: drop-shadow(0px -16px 32px rgba(0, 0, 0, 0.25));

    @media (max-width: 800px) {
      max-width: 100px;
      max-height: 100px;
      top: -50px;
    }
  }

  a {
    color: #3f736e;
  }

  a:hover {
    font-weight: 600;
  }
`;

const Notice = styled.div`
  /* text-align: right; */
  margin-right: 210px;
  margin-left: 40px;
  padding: 8px 0px;

  @media (max-width: 800px) {
    margin-right: 110px;
    margin-left: 20px;
  }
`;
