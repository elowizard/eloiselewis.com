import React from "react";
import styled from "styled-components";

const Section = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Section;

const Wrapper = styled.section`
  background-color: #f0f0f2;
  height: 100%;
  min-height: 100vh;
  &.green {
    background-color: #3f736e;
  }
  &.purple {
    background: linear-gradient(110.47deg, #6d6f8c -12.11%, #3d3f57 70.27%);
  }
`;
