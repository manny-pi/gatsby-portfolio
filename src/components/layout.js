import * as React from "react";
import { Link } from "gatsby";

const headerStyles = {
  margin: "0",
  padding: "0", 
  height: "5rem",
  background: "grey",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}


function Header(props) {
  return (
    <div style={headerStyles}>
      <div><Link to="/blog">Blog</Link></div>
      <div><Link to="/learn-with-me">Learn with Me</Link></div>
      <div><Link to="/portfolio">Portfolio</Link></div>
    </div>
  );
}

export default function Layout({ props, children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
