import React from "react";
import { Container, Link } from "./Navbar-style";

const Navbar = () => {
  return (
    <Container>
      <div>
        <Link href="/">Link 1</Link>
        <Link href="/">Link 2</Link>
        <Link href="/">Link 3</Link>
        <Link href="/">Link 4</Link>
      </div>
      <div>
        {/* <span>or</span> */}
        <Link href="/register">Register</Link>
      </div>
    </Container>
  );
};

export default Navbar;
