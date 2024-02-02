import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../base-components/layout.js";

export default function BlogIndex({ data }) {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      {nodes.map((node) => {
        let fm = node.frontmatter;
        return (
          <>
            <div className="blog-content-card" key={node.id}>
              <h2 className="content-link"><Link to={fm.slug}>{fm.title}</Link></h2>
              <h3>{fm.date}</h3>
              <p><em>{node.excerpt}</em></p>
            </div>
          </>

        );
      })}
    </Layout>
  );
}

export const data = graphql`
  query {
    allMdx {
      nodes {
        id
        excerpt
        frontmatter {
          title
          slug
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;
