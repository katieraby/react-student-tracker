import React from "react";
import { Link } from "@reach/router";
const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/graduates">Graduates</Link>
    </nav>
  );
};

export default Nav;
