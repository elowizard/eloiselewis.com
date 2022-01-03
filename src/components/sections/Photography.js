import React from "react";
import Section from "../Section";
import { StaticImage } from "gatsby-plugin-image";
import { PageTitle } from "../Typography";
import styled from "styled-components";
import { Link } from "gatsby";
import { TitleWrapper, ButtonWrapper } from "../Wrappers";

const SectionPhotography = () => {
  return (
    <Section id="photography" className="green">
      <PhotographyWrap>
        <TitleWrapper>
          <PageTitle as="h2">Photography</PageTitle>
        </TitleWrapper>
        <PhotoStrip>
          <StaticImage src="../../images/hearts.jpg" alt="origami hearts" />
          <StaticImage src="../../images/wheel.jpg" alt="ferris wheel" />
          <StaticImage src="../../images/elephant.jpg" alt="african elephant" />
          <StaticImage src="../../images/cardiff.jpg" alt="cardiff castle" />
          <StaticImage src="../../images/boat.jpg" alt="boat on lake" />
        </PhotoStrip>
        <ButtonWrapper>
          <Link to="/kenya/">View Kenya &raquo;</Link>
          <Link to="/misc/">View Misc. &raquo;</Link>
        </ButtonWrapper>
      </PhotographyWrap>
    </Section>
  );
};

export default SectionPhotography;

const PhotographyWrap = styled.div`
  padding-bottom: 80px;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const PhotoStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  margin: 0 auto;
  margin-bottom: 80px;
  align-items: center;
  column-gap: 1.5vw;
  justify-content: center;

  @media (max-width: 600px) {
    padding-top: 8vh;
  }

  .gatsby-image-wrapper {
    max-width: 20vw;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
    position: relative;
    z-index: 1;
  }

  .gatsby-image-wrapper:hover {
    transform: scale(1.1);
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;
