import * as React from "react";
import Header from "./header.js";

export default function Layout({ children }) {
  return (
    <div id="layout">
      <div className="page-wrapper"></div>
      <Header />
      <main>
        <div id="content-area-wrapper">{children}</div>
      </main>
    </div>
  );
}
