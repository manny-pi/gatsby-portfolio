import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout.js";

export default function PortfolioPost({ data }) {
  let mdxNode = data.mdx;

  return (
    <Layout>
      <div>
        <h1>{mdxNode.frontmatter.title}</h1>
        <div>{mdxNode.body}</div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
      }
    }
  }
`;
