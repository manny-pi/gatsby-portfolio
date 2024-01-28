import * as React from "react";
import Layout from "../base-components/layout.js";
import { Button } from "@material-tailwind/react";

export default function Index() {
  return (
    <Layout>
      <div id="main-index-page">
        <h1>Hi, I'm Prince!</h1>
        <Button>Click Me!</Button>
      </div>
    </Layout>
  )
}
