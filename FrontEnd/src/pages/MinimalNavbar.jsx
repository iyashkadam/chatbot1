import React from "react";
import { Link } from "react-router-dom";

function MinimalNavbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
        ← Back to Home
      </Link>
    </nav>
  );
}

export default MinimalNavbar;
