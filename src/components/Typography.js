import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: 72px;
  font-weight: 400;
  color: #f0f0f2;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  color: #3f736e;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const PaperTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  color: #3f736e;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const WhiteP = styled.p`
  color: #f0f0f2;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const P = styled.p`
  color: #6f6f6f;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const BlogTitle = styled.h1`
  font-weight: 400;
  color: #6f6f6f;
  font-size: 48px;
  margin-bottom: 0;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;
const DateTime = styled.h2`
  font-weight: 400;
  color: #6f6f6f;
  font-size: 12px;
  margin-top: 0;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const BlogArticle = styled.article`
  font-weight: 400;
  color: #6f6f6f;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  color: #6f6f6f;

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export {
  PageTitle,
  SectionTitle,
  PaperTitle,
  WhiteP,
  P,
  BlogTitle,
  DateTime,
  BlogArticle,
  FooterText,
};
