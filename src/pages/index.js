import "../styles/index.css";
import * as React from "react";
import Layout from "../base-components/layout.js";

export default function Index() {
  return (
    <Layout>
      <div id="welcome-message-wrapper">
        <div id="welcome-message">Hi, I'm Prince!</div>
      </div>
    </Layout>
  )
}
