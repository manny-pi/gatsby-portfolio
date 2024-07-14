import * as React from "react";
import Header from "./header.js";

export default function Layout({ children }) {
  return (
    <div id="layout">
      <Header />
      <div id="content-area-wrapper">{children}</div>
    </div>
  );
}
