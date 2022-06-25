import * as React from "react";
import LayoutError from "../components/LayoutError";
import { TitleWrapper } from "../components/Wrappers";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <LayoutError navbar="back" style={{ backgroundColor: "#5c5c5c" }}>
      <ErrorPage>
        <TitleWrapper>
          <h1>404</h1>
          <h2>Page not found</h2>
        </TitleWrapper>
      </ErrorPage>
      <FooterWrapper>
        <StaticImage
          src="../images/404_graphic.svg"
          alt="error 404 graphic"
          layout="constrained"
        />
      </FooterWrapper>
    </LayoutError>
  );
};

export default NotFoundPage;

const ErrorPage = styled.div`
  min-height: calc(100vh - 220px);
  overflow: hidden;

  h1 {
    color: #f0f0f2;
    font-size: 250px;
    margin: 0 0 0 20px;
    font-weight: 600;
  }

  h2 {
    color: #f0f0f2;
    font-size: 70px;
    margin: 0 0 0 20px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    min-height: calc(100vh - 200px);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 40vw;
    }

    h2 {
      font-size: 10vw;
    }
  }
`;

const FooterWrapper = styled.footer`
  height: 220px;
  position: relative;
  background-color: #d9d9d9;
  /* box-shadow: 0px -16px 32px rgba(0, 0, 0, 0.27); */

  @media (max-width: 800px) {
    height: 200px;
  }

  .gatsby-image-wrapper {
    width: 920px;
    position: absolute;
    overflow: visible;
    top: -170px;
    right: 50px;

    @media (max-width: 1000px) {
      max-width: 750px;
      right: 40px;
      top: -140px;
    }
    @media (max-width: 800px) {
      max-width: 500px;
      right: 30px;
      top: -95px;
    }

    @media (max-width: 600px) {
      max-width: 450px;
      top: -80px;
    }

    @media (max-height: 600px) {
      max-width: 500px;
      right: 20px;
      top: -90px;
    }

    @media (max-width: 500px) {
      max-width: 390px;
      right: 8px;
      top: -70px;
    }

    @media (max-width: 400px) {
      max-width: 350px;
      right: 5px;
      top: -60px;
    }

    @media (max-width: 360px) {
      max-width: 280px;
      right: 5px;
      top: -45px;
    }
  }
`;
