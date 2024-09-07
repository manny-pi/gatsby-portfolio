import * as React from "react";
import * as HeaderStyles from "../styles/header.css";
import { Link } from "gatsby";

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
  let { colors, setColors } = React.useState({
    "blog": "none",
    "learn-with-me": "none",
    "portfolio": "none",
    "about": "on"
  });

  function handleClick() {
    
  }
  /* 
    JSX:
    <form className="header-form">
      <input type="radio" name="blog"/>
      <input type="radio" name="learn-with-me"/>
      <input type="radio" name="portfolio"/>
      <input type="radio" name="about"/>
    </form>
    
    JS:
    // Get the form
    let data = new FormData(document.querySelector(".header-form")));
    
    // Get the active button
    let selectedButton = Array.from(data.keys())[0];
    let buttons = document.querySelectorAll(".header-button");
    for (let button of buttons) {
      if (button.name !=  selectedButton.name) { 
        button.style.setProperty("background-color", "white");
      } else {
        button.style.setProperty("background-color", "red");
      }
    }

  */
  
  return (
    <div id="header">
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
    </div>
  );
}
