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
} from "../components/Typography";
import { Link } from "gatsby";
// import styled from "styled-components";

const AllBlogsPage = () => {
  return (
    <Layout navbar="back" style={{ backgroundColor: "#D9D9D9" }}>
      <BlogsHomepage>
        <TitleWrapper>
          <SectionTitle>All blog posts</SectionTitle>
        </TitleWrapper>
        <BlogRow>
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
