import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BlogTitle, DateTime, BlogArticle } from "../components/Typography";
import styled from "styled-components";

const BlogPage = (props) => {
  console.log(props);
  return (
    <Layout navbar="blog">
      <ArticlePage>
        <MDXProvider>
          <GatsbyImage
            image={getImage(props.data.mdx.frontmatter.image)}
            alt="blog header"
          />
          <BlogWrapper>
            <BlogTitle>{props.data.mdx.frontmatter.title}</BlogTitle>
            <DateTime>
              {props.data.mdx.frontmatter.date} &bull;{" "}
              {props.data.mdx.timeToRead} minute read
            </DateTime>
            <BlogArticle>
              <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </BlogArticle>
          </BlogWrapper>
        </MDXProvider>
      </ArticlePage>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query Blog($pageId: String) {
    mdx(id: { eq: $pageId }) {
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
      timeToRead
      body
      id
    }
  }
`;

const ArticlePage = styled.div`
  padding-bottom: 60px;
`;

const BlogWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  .link-text {
    color: #7c9885;
  }

  .link-text:hover {
    font-weight: 600;
  }

  .blog-row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    max-width: 1000px;
    margin: 0 auto;

    .inline-img {
      max-width: 100%;
      margin: 0;
    }
  }

  .blog-column {
    flex: 50%;
    max-width: 50%;
    padding: 0 4px;

    .inline-img {
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
  }

  .inline-img {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0);
    transition: transform 0.8s ease-in-out, box-shadow 0.8s ease-in-out,
      z-index 1s;
    z-index: 1;
  }

  .inline-img:hover {
    transform: scale(2);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
    z-index: 10;

    @media (max-width: 600px) {
      transform: scale(1.1);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    }
  }
`;
