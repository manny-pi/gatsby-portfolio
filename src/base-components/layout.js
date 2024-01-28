import * as React from "react";
import { Link } from "gatsby";

function Header(props) {
  return (
    <div id="header">
      <div><Link to="/">Home</Link></div>
      <div><Link to="/blog">Blog</Link></div>
      <div><Link to="/learn-with-me">Learn with Me</Link></div>
      <div><Link to="/portfolio">Portfolio</Link></div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
