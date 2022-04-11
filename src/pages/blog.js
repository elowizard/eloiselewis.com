import React from "react";
import Layout from "../components/Layout";
import {
  TitleWrapper,
  // BlogsHomepage,
  // BlogLink,
  // BlogLabel,
} from "../components/Wrappers";
import {
  SectionTitle,
  BlogLinkTitle,
  LinkDateTime,
} from "../components/Typography";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const AllBlogsPage = (props) => {
  console.log(props);
  return (
    <Layout navbar="back" style={{ backgroundColor: "#D9D9D9" }}>
      <BlogsHomepage>
        <TitleWrapper>
          <SectionTitle>All blog posts</SectionTitle>
        </TitleWrapper>
        <BlogGrid>
          {props.data.allMdx.edges.map((post, index) => {
            return (
              <BlogCard as={Link} to={`/blog/${post.node.slug}`} key={index}>
                <GatsbyImage
                  className="linkImage"
                  image={getImage(post.node.frontmatter.image)}
                  alt="blog header"
                />
                <BlogLabel>
                  <BlogLinkTitle>{post.node.frontmatter.title}</BlogLinkTitle>
                  <LinkDateTime>
                    {post.node.frontmatter.date} &bull; {post.node.timeToRead}{" "}
                    minute read
                  </LinkDateTime>
                </BlogLabel>
              </BlogCard>
            );
          })}
        </BlogGrid>
      </BlogsHomepage>
    </Layout>
  );
};

export default AllBlogsPage;

export const query = graphql`
  query AllPosts {
    allMdx(sort: { fields: slug, order: DESC }) {
      edges {
        node {
          slug
          timeToRead
          frontmatter {
            title
            date
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
`;

const BlogsHomepage = styled.div`
  text-align: center;
  padding-bottom: 40px;
  min-height: calc(100vh - 80px);
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  row-gap: 80px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`;

const BlogLabel = styled.div`
  background-color: #f0f0f2;
  /* padding: 20px 40px; */
  width: 70%;
  position: absolute;
  bottom: -25%;
  left: 0;
  z-index: 10;
  /* h2,
  h3 {
    margin: 0;
    padding: 0;
  } */
  left: 50%;
  transform: translate(-50%, 0);
  padding: 8px 10px;
  /* top: -8%;
  right: -25%; */
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease 0.2s;
  @media (max-width: 800px) {
    /* width: 60%; */
    bottom: -40px;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

const BlogCard = styled.div`
  display: block;
  position: relative;
  text-decoration: none;
  /* height: 55%; */

  .linkImage {
    opacity: 1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;
  }

  :hover {
    .linkImage {
      opacity: 0.7;
      transform: translateX(2px) translateY(2px);
      box-shadow: none;
    }
    ${BlogLabel} {
      transform: translateX(-49%) translateY(2px);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
