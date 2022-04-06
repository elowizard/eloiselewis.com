import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import {
  TitleWrapper,
  BlogsHomepage,
  BlogRow,
  BlogColumn,
  BlogLink,
  BlogLabel,
} from "../components/Wrappers";
import {
  SectionTitle,
  BlogLinkTitle,
  DateTime,
  LinkDateTime,
} from "../components/Typography";
import { Link, graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import styled from "styled-components";

const AllBlogsPage = (props) => {
  console.log(props);
  return (
    <Layout navbar="back" style={{ backgroundColor: "#D9D9D9" }}>
      <BlogsHomepage>
        <TitleWrapper>
          <SectionTitle>All blog posts</SectionTitle>
        </TitleWrapper>
        <BlogRow>
          <BlogColumn>
            <MDXProvider>
              <BlogLink as={Link} to="/2021-a-year-in-review/">
                {/* <StaticImage
                src="../images/blog2/london-panorama.jpg"
                alt="view of London"
              /> */}
                <GatsbyImage
                  className="linkImage"
                  image={getImage(props.data.mdx.frontmatter.image)}
                  alt="blog header"
                />
                <BlogLabel>
                  {/* <BlogLinkTitle>2021 - A Year in Review</BlogLinkTitle>
                  <DateTime>Friday, 31 December 2021</DateTime> */}
                  <BlogLinkTitle>
                    {props.data.mdx.frontmatter.title}
                  </BlogLinkTitle>
                  <LinkDateTime>
                    {props.data.mdx.frontmatter.date} &bull;{" "}
                    {props.data.mdx.timeToRead} minute read
                  </LinkDateTime>
                </BlogLabel>
              </BlogLink>
            </MDXProvider>
            <MDXProvider>
              <BlogLink as={Link} to="/2021-a-year-in-review/">
                {/* <StaticImage
                src="../images/blog2/london-panorama.jpg"
                alt="view of London"
              /> */}
                <GatsbyImage
                  className="linkImage"
                  image={getImage(props.data.mdx.frontmatter.image)}
                  alt="blog header"
                />
                <BlogLabel>
                  {/* <BlogLinkTitle>2021 - A Year in Review</BlogLinkTitle>
                  <DateTime>Friday, 31 December 2021</DateTime> */}
                  <BlogLinkTitle>
                    {props.data.mdx.frontmatter.title}
                  </BlogLinkTitle>
                  <LinkDateTime>
                    {props.data.mdx.frontmatter.date} &bull;{" "}
                    {props.data.mdx.timeToRead} minute read
                  </LinkDateTime>
                </BlogLabel>
              </BlogLink>
            </MDXProvider>
          </BlogColumn>
          <BlogColumn>
            <BlogLink as={Link} to="/2021-a-year-in-review/">
              <StaticImage
                src="../images/blog2/london-panorama.jpg"
                alt="view of London"
              />
              <BlogLabel>
                <BlogLinkTitle>2021 - A Year in Review</BlogLinkTitle>
                <DateTime>Friday, 31 December 2021</DateTime>
              </BlogLabel>
            </BlogLink>
            <BlogLink as={Link} to="/2021-a-year-in-review/">
              <StaticImage
                src="../images/blog2/london-panorama.jpg"
                alt="view of London"
              />
              <BlogLabel>
                <BlogLinkTitle>2021 - A Year in Review</BlogLinkTitle>
                <DateTime>Friday, 31 December 2021</DateTime>
              </BlogLabel>
            </BlogLink>
          </BlogColumn>
        </BlogRow>
      </BlogsHomepage>
    </Layout>
  );
};

export default AllBlogsPage;

export const query = graphql`
  query BlogLink {
    mdx {
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
      slug
      timeToRead
      body
    }
  }
`;

// const BlogLink = styled.div`
//   text-decoration: none;
//   a {
//     height: 55%;
//   }

//   a:hover {
//     transform: translateX(2px) translateY(2px);
//     opacity: 0.5;
//   }
// `;
