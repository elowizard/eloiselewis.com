import styled from "styled-components";

const TextWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 80px;
`;

const TitleWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
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

const ButtonWrapper = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  justify-content: space-around;

  a {
    background-color: #8c8c8c;
    color: #f0f0f2;
    padding: 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: translateX(2px) translateY(2px);
    box-shadow: none;
  }
`;

export {
  TextWrapper,
  TitleWrapper,
  Center,
  PhotoPage,
  PhotoRow,
  PhotoColumn,
  ButtonWrapper,
};
