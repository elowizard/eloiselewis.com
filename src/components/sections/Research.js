import React from "react";
import Section from "../Section";
import { StaticImage } from "gatsby-plugin-image";
import { Center, TextWrapper } from "../Wrappers";
import { SectionTitle, P, PaperTitle } from "../Typography";

const SectionResearch = () => {
  return (
    <Section id="research">
      <TextWrapper>
        <SectionTitle>Check out my research paper:</SectionTitle>
        <Center>
          <StaticImage
            src="../../images/minerals.png"
            alt="molecules binding to a surface"
            layout="constrained"
            width={577}
            height={323}
            style={{ filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))" }}
          />
        </Center>
        <PaperTitle>
          First-Principles Density Functional Theory Characterisation of the
          Adsorption Complexes of H<sub>3</sub>AsO<sub>3</sub> on Cobalt Ferrite
          (Fe<sub>2</sub>CoO<sub>4</sub>) Surfaces.
        </PaperTitle>
        <P>
          <b>Journal: </b>
          <em>
            Minerals, 11(2), 195 (<b>2021</b>)
          </em>
        </P>
        <P>
          <b>Authors: </b>
          <em>Eloise C. Lewis and Nelson Y. Dzade*</em>
        </P>
        <P>
          <b>Link: </b>
          <em>
            <a
              href="https://doi.org/10.3390/min11020195"
              target="_blank"
              rel="noreferrer"
            >
              https://doi.org/10.3390/min11020195
            </a>
          </em>
        </P>
        <P>
          <b>Description: </b>
          <em>
            An extension of my MChem Thesis, we used computational chemistry
            methods to gain a first-principle mechanistic insight into the
            adsorption of arsenic on iron-cobalt oxide (Fe<sub>2</sub>CoO
            <sub>4</sub>).
          </em>
        </P>
      </TextWrapper>
    </Section>
  );
};

export default SectionResearch;
