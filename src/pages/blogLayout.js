import React from "react";
import Layout from "./../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import styled from "styled-components";

const BlogPage = (props) => {
  console.log(props);
  return (
    <Layout>
      <MDXProvider>
        <GatsbyImage
          image={getImage(props.data.mdx.frontmatter.image)}
          alt="blog header"
        />
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <article>
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </article>
      </MDXProvider>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query Blog {
    mdx {
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
      slug
      timeToRead
      body
    }
  }
`;
// export const query = graphql`
//   query Blogs {
//     mdx {
//       edges {
//         node {
//           id
//           slug
//           frontmatter {
//             title
//           }
//           body
//         }
//       }
//     }
//   }
// `;
