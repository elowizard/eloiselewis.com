import styled from "styled-components";

const TextWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 80px;

  @media (max-width: 600px) {
    padding-top: 80px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const TitleWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;

  @media (max-width: 600px) {
    padding-top: 60px;
    padding-left: 16px;
    padding-right: 16px;
  }
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

  @media (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }

  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

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

const BlogsHomepage = styled.div`
  text-align: center;
  padding-bottom: 40px;
`;

const BlogLink = styled.div`
  text-decoration: none;
  height: 55%;

  /* a:hover {
    transform: translateX(2px) translateY(2px);
    opacity: 0.5;
  } */
`;

const BlogRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  max-width: 1400px;
  margin: 0 auto;

  .gatsby-image-wrapper {
    max-width: 100%;
    margin: 0;
  }

  a:hover {
    opacity: 0.5;
  }
`;

const BlogColumn = styled.div`
  flex: 50%;
  max-width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 8%;

  @media (max-width: 800px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const BlogLabel = styled.div`
  background-color: #f0f0f2;
  max-width: 50%;
  /* height: 80px; */
  position: relative;
  top: -8%;
  right: -25%;
  /* filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25)); */
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

  @media (max-width: 400px) {
    max-width: 80%;
    right: -10%;
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
  BlogsHomepage,
  BlogRow,
  BlogColumn,
  BlogLink,
  BlogLabel,
};
