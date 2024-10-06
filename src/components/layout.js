import * as React from "react";
import Header from "./header.js";

export default function Layout({ children }) {
  return (
    <section className="layout">
      <div className="page-wrapper">
        <Header />
        <main>
          <div className="content-area-wrapper">{children}</div>
        </main>
      </div>
    </section>
  );
}
