import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Navbar = (props) => {
  return (
    <Wrapper>
      <NavIcon>
        <Link to="/">
          <StaticImage
            src="./../images/logo.svg"
            alt="logo"
            layout="fixed"
            width={58}
            height={58}
          />
        </Link>
      </NavIcon>
      <List>
        {props.kind === "back" ? (
          <>
            {/* <li>
              <Link to="/">Blog</Link>
            </li> */}
            <li>
              <Link to="/">Back to home</Link>
            </li>
          </>
        ) : props.kind === "blog" ? (
          <>
            {/* <li>
              <Link to="/">All blog posts</Link>
            </li> */}
            <li>
              <Link to="/">Back to home</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#photography">Photography</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#contact">Follow Me</a>
            </li>
          </>
        )}
      </List>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background-color: #f0f0f2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  box-shadow: 0px 2px 10px 0px black;
  z-index: 100;
`;

const List = styled.ul`
  background-color: #f0f0f2;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #3f736e;
    text-decoration: none;
    font-weight: 800;
    padding: 25px 50px;
    display: block;
    line-height: 1;
    font-size: 16px;
    white-space: nowrap;

    @media (max-width: 900px) {
      /* font-size: 14px; */
      padding: 25px 25px;
    }

    @media (max-width: 670px) {
      font-size: 10px;
      padding: 25px 12px;
    }
  }

  a:hover {
    background-color: #d9d9d9;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }

  a:active {
    background-color: #d9d9d9;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

const NavIcon = styled.div`
  .gatsby-image-wrapper {
    @media (max-width: 670px) {
      width: 40px !important;
      height: 40px !important;
    }
  }

  @media (max-width: 400px) {
    display: none;
  }
`;
