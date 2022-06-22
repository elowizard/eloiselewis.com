import React from "react";
import styled from "styled-components";
import { WhiteP, PageTitle } from "./Typography";

const PhotoHeader = ({ title, description }) => {
  return (
    <Wrapper>
      <StyledPageTitle>{title}</StyledPageTitle>
      {description && <WhiteP>{description}</WhiteP>}
    </Wrapper>
  );
};

export default PhotoHeader;

const Wrapper = styled.section`
  padding-bottom: 40px;
`;

const StyledPageTitle = styled(PageTitle)`
  padding-top: 30px;
  margin-bottom: 0;
  margin-top: 0;
`;
