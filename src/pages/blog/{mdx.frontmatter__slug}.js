import * as React from "react";
import Layout from "../../base-components/layout.js";
import { graphql } from "gatsby";

export default function BlogPost({ data, children }) {
  const frontmatter = data.mdx.frontmatter;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h2 id={frontmatter.slug}>{frontmatter.date}</h2>
        {children}
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
    }
  }
`;
