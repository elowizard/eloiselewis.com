import React from "react";
import Section from "../Section";
import { StaticImage } from "gatsby-plugin-image";
import { TextWrapper, Center } from "../Wrappers";
// import styled from "styled-components";
import { PageTitle, WhiteP } from "../Typography";
import styled from "styled-components";

const SectionAbout = () => {
  return (
    <Section id="about" className="green">
      <TextWrapper>
        <Center>
          <AboutImage>
            <StaticImage
              src="./../../images/me2.png"
              alt="me"
              quality={90}
              layout="constrained"
              width={240}
              height={240}
            />
          </AboutImage>
        </Center>
        <PageTitle>Hi, I'm Eloise!</PageTitle>
        <WhiteP>I’m a Science and Chemistry Teacher based in London.</WhiteP>
        <WhiteP>
          I always had an interest in web design and learning to code, and
          learning some basics during my MChem research project in computational
          chemistry at Cardiff University helped get me started. Now, with
          regular school closures and seemingly endless quarantines, I’ve
          finally been able to get learning for real!
        </WhiteP>
        <WhiteP>
          So, welcome to my website! This website will be my playground, and a
          place to share what I get up to along the way. Here you’ll find some
          of my past and current work, photography, and links to other
          platforms.
        </WhiteP>
        <WhiteP>Sorry, you won’t find any cat images here (yet).</WhiteP>
      </TextWrapper>
    </Section>
  );
};

export default SectionAbout;

const AboutImage = styled.div`
  .gatsby-image-wrapper {
    @media (max-width: 800px) {
      max-width: 160px !important;
    }
  }
`;
