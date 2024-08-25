import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../base-components/layout.js";

export default function BlogIndex({ data }) {
  const nodes = data.allMdx.nodes;
  // Sort blog posts by date
  // let entries = Object.entries(nodes).sort((p1, p2) => {(new Date(p1[1].date)) - (new Date(p2[1].date))});
  // let sortedEntries = Object.fromEntries(entries);

  return (
    <Layout>
      {nodes.map((node) => {
        let fm = node.frontmatter;
        return (
          <div key={node.id}>
            <div className="blog-content-card">
              <h2 className="content-link">
                <Link to={fm.slug}>{fm.title}</Link>
              </h2>
              <h3>{fm.date}</h3>
              <p>
                <em>{node.excerpt}</em>
              </p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export const data = graphql`
  query {
    allMdx(filter: { frontmatter: { app: { eq: "blog" } } }) {
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
