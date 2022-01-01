import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/kenya/">Kenya</Link>
      <Link to="/misc/">Misc</Link>
    </nav>
  );
};

export default Navbar;
