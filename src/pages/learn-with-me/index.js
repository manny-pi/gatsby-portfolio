import * as React from "react";
import Layout from "../../components/layout.js";
import { graphql } from "gatsby";
import { Link } from "gatsby";

export default function LWMIndex({ data }) {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      {nodes.map((node) => {
        let fm = node.frontmatter;
        return (
          <div key={node.id}>
            <div className="blog-content-card">
              <h2 className="content-link"><Link to={fm.slug}>{fm.title}</Link></h2>
              <h3>{fm.date}</h3>
              <p><em>{node.excerpt}</em></p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export const data = graphql`
  query {
    allMdx(filter: { frontmatter: { app: { eq: "learn-with-me" } } }) {
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
