import * as React from "react";
import { Link } from "gatsby";

function Button({ children }) {
  return <div className="header-button">{children}</div>;
}

export default function Header(props) {
  return (
    <div id="header">
      <div id="header-content-links">
        <Link to="/blog" activeClassName="Link">
          <Button>Blog</Button>
        </Link>

        <Link to="/learn-with-me" activeClassName="Link">
          <Button>Learn With Me</Button>
        </Link>

        <Link to="/portfolio" activeClassName="Link">
          <Button>Portfolio</Button>
        </Link>
      </div>

      <div id="header-about-link">
        <Link to="/" activeClassName="Link">
          <Button>About</Button>
        </Link>
      </div>
    </div>
  );
}
