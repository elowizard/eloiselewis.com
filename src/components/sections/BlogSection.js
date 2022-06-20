import React from "react";
import Section from "../Section";
import { SectionTitle } from "../Typography";
import { ButtonWrapper, TitleWrapper } from "../Wrappers";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SectionBlog = () => {
  // console.log(props);
  return (
    <Section id="blog">
      <TitleWrapper>
        <SectionTitle>Latest blog post:</SectionTitle>
      </TitleWrapper>
      <StaticQuery
        query={graphql`
          query LatestPost {
            allMdx(sort: { fields: slug, order: DESC }, limit: 1) {
              edges {
                node {
                  slug
                  frontmatter {
                    title
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          aspectRatio: 4
                          layout: FULL_WIDTH
                          transformOptions: { fit: COVER }
                          quality: 90
                        )
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <LatestArticle
            as={Link}
            to={`/blog/${data.allMdx.edges[0].node.slug}`}
          >
            <>{console.log(data)}</>
            <LatestImage>
              <GatsbyImage
                className="linkImage"
                image={getImage(data.allMdx.edges[0].node.frontmatter.image)}
                alt="blog header"
              />
            </LatestImage>
            <LatestTitle>
              {data.allMdx.edges[0].node.frontmatter.title}
            </LatestTitle>
          </LatestArticle>
        )}
      />

      <ButtonWrapper>
        <Link to="/blog/" className="yellow">
          All posts
          {/* &raquo; */}
        </Link>
        {/* <Link to="/">View All &raquo;</Link> */}
      </ButtonWrapper>
    </Section>
  );
};

export default SectionBlog;

const LatestImage = styled.div`
  opacity: 0.7;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  transition: all 1s ease;

  /* @media (max-width: 600px) {
    opacity: 1;
  } */
`;

const LatestTitle = styled.h3`
  font-size: 48px;
  color: #5c5c5c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  white-space: nowrap;
  text-decoration: none;
  transition: all 1s ease;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }

  display: inline-block;
  cursor: pointer;

  ::after {
    content: "";
    display: block;
    margin-top: 8px;
    margin-left: auto;
    margin-right: auto;
    height: 4px;
    width: 0px;
    background-color: #5c5c5c;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    transition: all 1s ease;
  }
`;

const LatestArticle = styled.div`
  position: relative;
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
  text-decoration: none;

  @media (max-width: 800px) {
    margin-top: 20vh;
  }
  :hover {
    ${LatestImage} {
      opacity: 1;
    }

    ${LatestTitle} {
      color: #e5e5e5;

      ::after {
        width: 100%;
        background-color: #e5e5e5;
      }
    }
  }
`;
