import React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { P } from "./Typography";

const Footer = () => {
  return (
    <Wrapper>
      <StaticImage
        src="./../images/logo2.svg"
        alt="logo"
        layout="constrained"
        width={180}
        height={180}
      />
      <Notice>
        <P>Content © 2022 Eloise Lewis. All rights reserved.</P>
        <P>
          Design and code (except graphics) are open source on{" "}
          <a
            href="https://github.com/elowizard/eloiselewis.com"
            target="_blank"
          >
            GitHub
          </a>
          . Hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank">
            Netlify
          </a>
          .
        </P>
      </Notice>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 150px;
  position: relative;
  box-shadow: 0px -16px 32px rgba(0, 0, 0, 0.27);

  .gatsby-image-wrapper {
    width: 180px;
    height: 180px;
    position: absolute;
    top: -90px;
    left: 8px;
    filter: drop-shadow(0px -16px 32px rgba(0, 0, 0, 0.25));
  }

  a {
    color: #3f736e;
  }

  a:hover {
    font-weight: 600;
  }
`;

const Notice = styled.div`
  text-align: right;
  margin-left: 210px;
  margin-right: 50px;
  padding: 1em;
`;
