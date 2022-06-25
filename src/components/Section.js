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
    background-color: #7c9885;
  }
  &.yellow {
    background-color: #e9ac47cc;
  }
`;
