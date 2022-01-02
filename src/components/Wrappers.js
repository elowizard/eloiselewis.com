import styled from "styled-components";

const TextWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 80px;
`;

const Center = styled.div`
  text-align: center;
`;

const PhotoPage = styled.div`
  text-align: center;
  padding-bottom: 40px;
`;

const PhotoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  max-width: 1000px;
  margin: 0 auto;

  .gatsby-image-wrapper {
    max-width: 100%;
    margin: 0;
  }
`;

const PhotoColumn = styled.div`
  flex: 33%;
  max-width: 33%;
  padding: 0 4px;

  .gatsby-image-wrapper {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }
`;

export { TextWrapper, Center, PhotoPage, PhotoRow, PhotoColumn };
