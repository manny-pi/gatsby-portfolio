import * as React from "react";
import { Link } from "gatsby";
import { ButtonGroup, Button } from "@material-tailwind/react";

function Header(props) {
  return (
    <div id="header">
      <ButtonGroup variant="outlined">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/blog">Blog</Link>
        </Button>
        <Button>
          <Link to="/learn-with-me">Learn Wih Me</Link>
        </Button>
        <Button>
          <Link to="/portfolio">Portfolio</Link>
        </Button>
      </ButtonGroup>
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
