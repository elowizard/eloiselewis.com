import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Navbar = (props) => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    // document.getElementById("menuicon").style.display = "none";

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

  // document.getElementById("menuicon").addEventListener("click", )

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("menuicon").style.display = "block";

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
          <Link to="/" style={{ fontSize: "30px", cursor: "pointer" }}>
            <img id="homeicon" className="homeicon" src="../home_icon.svg" />
          </Link>
        </>
      ) : props.kind === "blog" ? (
        <>
          <ul className="navul">
            <div id="mySidenav" className="sidenav">
              <button className="closebtn" onClick={closeNav}>
                <img
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

          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            <img id="menuicon" className="menuicon" src="../menu_icon.svg" />
          </span>
        </>
      ) : (
        <>
          <ul className="navul">
            <div id="mySidenav" className="sidenav">
              <button className="closebtn" onClick={closeNav}>
                <img
                  id="backarrow"
                  className="backarrow"
                  src="back_arrow.svg"
                  width="80px"
                />
              </button>
              <a className="option" href="#about">
                About
              </a>
              <a className="option" href="#blog">
                Blog
              </a>
              <a className="option" href="#photography">
                Photography
              </a>
              <a className="option" href="#research">
                Research
              </a>
              <a className="option" href="#contact">
                Follow Me
              </a>
            </div>
          </ul>

          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            <img id="menuicon" className="menuicon" src="menu_icon.svg" />
          </span>
        </>
      )}

      {/* <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={closeNav}>
          &loarr;
        </button>
        <a className="option" href="#">
          About
        </a>
        <a className="option" href="#">
          Blog
        </a>
        <a className="option" href="#">
          Photography
        </a>
        <a className="option" href="#">
          Research
        </a>
        <a className="option" href="#">
          Follow Me
        </a>
      </div>

      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        <img id="menuicon" className="menuicon" src="menu_icon.svg" />
      </span> */}
    </Wrapper>

    /* <NavIcon>
        <Link to="/">
          <StaticImage
            src="./../images/logo.svg"
            alt="logo"
            layout="fixed"
            width={58}
            height={58}
          />
        </Link>
      </NavIcon> */
    /* <List>
        {props.kind === "back" ? (
          <>
          
            <li>
              <Link to="/">Back to home</Link>
            </li>
          </>
        ) : props.kind === "blog" ? (
          <>
            <li>
              <Link to="/blog">All blog posts</Link>
            </li>
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
        )} */
    /* </List> */
  );
};

export default Navbar;

const Wrapper = styled.nav`
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
    /* border-style: none inset none none;
        border-color: #e9ac47; */
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
    /* text-align: center; */

    /* transition: 0.3s; */
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.5));
  }
  a.option {
    padding: 50px 8px 8px 20px;
  }

  /* .sidenav a:hover {
        transform: translateX(2px) translateY(2px);
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.6));
      } */

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

  /* .option::before {
        background: #e9ac47;
        content: "";
        inset: 0;
        position: absolute;
        transform: scaleX(0);
        z-index: -1;
      }

      .option:hover::before {
        transform: scaleX(1);
      }

      .option::before {
        background: linear-gradient(90deg, #e9ac47);
        content: "";
        inset: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
        z-index: -1;
      } */

  /* .option::after {
        content: "";
        display: block;
        margin-top: 4px;
        margin-left: auto;
        margin-right: auto;
        height: 4px;
        width: 0px;
        background-color: #e9ac47;
        transition: all 0.5s ease-in-out;
      }

      .option:hover::after {
        width: 100%;
      } */

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
    padding-top: 20px;
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
`;

// const Wrapper = styled.nav`
//   background-color: #f0f0f2;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-left: 10px;
//   box-shadow: 0px 2px 10px 0px black;
//   z-index: 100;
// `;

// const List = styled.ul`
//   background-color: #f0f0f2;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   a {
//     color: #3f736e;
//     text-decoration: none;
//     font-weight: 800;
//     padding: 25px 50px;
//     display: block;
//     line-height: 1;
//     font-size: 16px;
//     white-space: nowrap;
//     cursor: pointer;

//     @media (max-width: 900px) {
//       padding: 25px 25px;
//     }

//     @media (max-width: 670px) {
//       font-size: 10px;
//       padding: 25px 12px;
//     }
//   }

/* a:hover {
    background-color: #d9d9d9;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  } */

/* a:active {
    background-color: #d9d9d9;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  } */

//   a::after {
//     content: "";
//     display: block;
//     margin-top: 4px;
//     margin-left: auto;
//     margin-right: auto;
//     height: 4px;
//     width: 0px;
//     background-color: #3f736e;
//     transition: all 0.5s ease-in-out;
//   }

//   a:hover::after {
//     width: 100%;
//   }
// `;

// const NavIcon = styled.div`
//   .gatsby-image-wrapper {
//     @media (max-width: 670px) {
//       width: 40px !important;
//       height: 40px !important;
//     }
//   }

//   @media (max-width: 400px) {
//     display: none;
//   }
// `;
