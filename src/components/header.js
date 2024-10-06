import { Link } from "gatsby";
import * as React from "react";
import "../styles/header.css";

function HeaderLink(props) {
  return (
    <Link to={props.to} onClick={props.onClick} activeClassName="Link">
      <div className="header-button" id={props.id}>
        {props.children}
      </div>
    </Link>
  );
}

export default function Header(props) {
  
  return (
    <header>
      <div id="header-content-links">
        <HeaderLink id="blog" to="/blog">
          Blog
        </HeaderLink>
        <HeaderLink id="learn-with-me" to="/learn-with-me">
          Learn With Me
        </HeaderLink>
        <HeaderLink id="portfolio" to="/portfolio">
          Portfolio
        </HeaderLink>
      </div>
      <div id="header-about-link">
        <HeaderLink id="about" to="/">
          About
        </HeaderLink>
      </div>
    </header>
  );
}
