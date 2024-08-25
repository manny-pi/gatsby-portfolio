import * as React from "react";
import Layout from "../../base-components/layout.js";
import { graphql } from "gatsby";

export default function BlogPost({ data, children }) {
  const mdxNode = data.mdx;
  return (
    <Layout>
      <h1>{mdxNode.frontmatter.title}</h1>
      <section>
      <div>
        <p>
          <b>Date Posted:</b> {mdxNode.frontmatter.date}
        </p>
        <p>
          <b>Last Modified:</b> {mdxNode.parent.modifiedTime}
        </p>
      </div>
      </section>
      <section id="blog-post-content">
        {children}
      </section>
    </Layout>
  );
}

export const data = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
      parent {
        ... on File {
          modifiedTime(formatString:"MMM DD, YYYY")
        }
      }
    }
  }
`;
