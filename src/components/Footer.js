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
        src="./../images/logo_new.svg"
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
  height: 80px;
  position: relative;
  box-shadow: 0px -16px 32px rgba(0, 0, 0, 0.27);

  @media (max-width: 800px) {
    height: 64px;
  }

  .gatsby-image-wrapper {
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: 8px;
    filter: drop-shadow(0px -16px 32px rgba(0, 0, 0, 0.25));

    @media (max-width: 800px) {
      max-width: 100px;
      max-height: 100px;
      top: -50px;
    }
  }

  a {
    color: #7c9885;
  }

  a:hover {
    font-weight: 600;
  }
`;

const Notice = styled.div`
  margin-right: 210px;
  margin-left: 40px;
  padding: 5px 0px;

  @media (max-width: 800px) {
    margin-right: 110px;
    margin-left: 20px;
  }
`;
