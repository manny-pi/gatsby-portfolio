import * as React from "react";
import { Link } from "gatsby";
import { ButtonGroup, Button } from "@material-tailwind/react";

export default function Header(props) {
  return (
    <div id="header">
        <Link to="/" activeClassName="Link">
          <Button>Home</Button>
        </Link>

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
  );
}
