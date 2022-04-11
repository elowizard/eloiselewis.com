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
  padding-top: 60px;
  padding-bottom: 60px;
`;

const BlogWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
