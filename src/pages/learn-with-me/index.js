import * as React from "react";
import Layout from "../../base-components/layout.js";
import { graphql } from "gatsby";

export default function LWMIndex({ data }) {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      {
        nodes.map(node => {
          let fm = node.frontmatter; 
          return (
            <div>
              <h1>{fm.title}</h1>
              
            </div>
          ); 
        })
      }
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;