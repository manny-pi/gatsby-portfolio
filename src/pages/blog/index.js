import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout.js";

export default function BlogIndex({ data }) {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      {nodes.map((node) => {
        return (
          <div key={node.id}>
            <h2 className="content-link"><Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link></h2>
              {node.frontmatter.date}
          </div>
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
        frontmatter {
          title
          slug
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;
