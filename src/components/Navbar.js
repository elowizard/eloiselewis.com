import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Navbar = (props) => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    var fadeTarget = document.getElementById("menuicon");
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity = 0;
      } else {
        clearInterval(fadeEffect);
      }
    }, 10);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var fadeTarget = document.getElementById("menuicon");
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 0;
      }
      if (fadeTarget.style.opacity < 1) {
        fadeTarget.style.opacity = 1;
      } else {
        clearInterval(fadeEffect);
      }
    }, 10);
  }
  return (
    <Wrapper>
      {props.kind === "back" ? (
        <>
          <Link
            to="/"
            tabIndex="0"
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            <img
              alt="home icon"
              id="homeicon"
              className="homeicon"
              src="../home_icon.svg"
            />
          </Link>
        </>
      ) : props.kind === "blog" ? (
        <>
          <ul className="navul">
            <div id="mySidenav" className="sidenav">
              <button className="closebtn" onClick={closeNav}>
                <img
                  alt="back arrow"
                  id="backarrow"
                  className="backarrow"
                  src="../back_arrow.svg"
                />
              </button>
              <a className="option" href="/blog">
                All blog posts
              </a>
              <a className="option" href="/">
                Back to home
              </a>
            </div>
          </ul>

          <button
            role="menu"
            tabIndex="0"
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            <img
              alt="menu icon"
              id="menuicon"
              className="menuicon"
              src="../menu_icon.svg"
            />
          </button>
        </>
      ) : (
        <>
          <ul className="navul">
            <div id="mySidenav" className="sidenav">
              <button className="closebtn" onClick={closeNav}>
                <img
                  alt="back arrow"
                  id="backarrow"
                  className="backarrow"
                  src="back_arrow.svg"
                  width="80px"
                />
              </button>
              <a role="menuitem" className="option" href="#about">
                About
              </a>
              <a role="menuitem" className="option" href="#blog">
                Blog
              </a>
              <a role="menuitem" className="option" href="#photography">
                Photography
              </a>
              <a role="menuitem" className="option" href="#research">
                Research
              </a>
              <a role="menuitem" className="option" href="#contact">
                Follow Me
              </a>
            </div>
          </ul>

          <button
            role="menu"
            tabIndex="0"
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            <img
              alt="menu icon"
              id="menuicon"
              className="menuicon"
              src="menu_icon.svg"
            />
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  button {
    position: fixed;
    z-index: 10001;
  }

  .navul {
    margin: 0;
  }

  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 10001;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #00000099, #00000000);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 50px;
    box-shadow: 5px 0px 0px 0px #e9ac47 inset;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .sidenav a {
    padding: 20px 58px 0px 20px;
    text-decoration: none;
    font-size: 25px;
    font-weight: 500;
    color: #f0f0f2;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.5));
  }

  a.option {
    padding: 50px 8px 8px 20px;
  }

  button {
    padding-top: 10px;
    background: none;
    border: none;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.4));
  }

  button:hover {
    cursor: pointer;
    transform: translateX(2px) translateY(2px);
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.6));
  }

  .option::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #e9ac47;
    bottom: 0;
    left: 0;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .option:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 40px;
    font-size: 36px;
    margin-left: 50px;
  }

  .menuicon,
  .homeicon {
    position: fixed;
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.6));
    transition: all 0.5s ease-in-out;
    z-index: 10001;
    padding-left: 20px;
    padding-top: 10px;
  }

  .menuicon:hover,
  .homeicon:hover {
    transform: translateX(3px) translateY(3px);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.8));
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 60px;
    }
    .sidenav a {
      font-size: 20px;
    }
  }
`;
