import * as React from "react";
import Layout from "../../base-components/layout.js";
import { graphql } from "gatsby";

export default function LWMIndex({ data }) {
  let nodes = data.allMdx.nodes;
  return (
    <Layout>
      <h1>Portfolio</h1>
      <div>
        {nodes.map((node) => {
          return <div key={node.id}>{node.frontmatter.title}</div>;
        })}
      </div>
    </Layout>
  );
}

export const data = graphql`
  query {
    allMdx(filter: { frontmatter: { app: { eq: "portfolio" } } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`;
