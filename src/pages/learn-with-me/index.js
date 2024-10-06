import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout.js";

export default function BlogIndex({ data }) {
  const nodes = data.allMdx.nodes;

  return (
    <Layout>
      {/* <div>
        <TagSelector nodes={nodes} />
      </div> */}
      <div>
        {nodes.map((node) => {
          let fm = node.frontmatter;
          return (
            <div key={node.id}>
              <div className="blog-content-card">
                <h2 className="content-link">
                  <Link to={fm.slug}>{fm.title}</Link>
                </h2>
                <p>{fm.date}</p>
                <p><em>{fm.description}</em></p>
              </div>
            </div>
          );
        })}
      </div>
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
