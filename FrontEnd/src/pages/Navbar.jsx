import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}>
      <Link to="/" style={{ marginRight: "1rem", textDecoration: "none" }}>Home</Link>
      <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
    </nav>
  );
}

export default Navbar;
