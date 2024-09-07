import * as React from "react";
import Layout from "../../base-components/layout.js";
import { graphql } from "gatsby";
import alertGradient from "@material-tailwind/react/theme/components/alert/alertGradient.js";

export default function BlogPost({ data, children }) {
  let mdxNode = data.mdx;
  let tags;
  try {
    mdxNode.frontmatter.tags.map((tag) => {
      return <div className="tag">{tag}</div>;
    });
  } catch (e) {
    alert("No tags on this post yet.");
  }
  
  return (
    <Layout>
      <h1>{mdxNode.frontmatter.title}</h1>
      <section>
        <p>
          <b>Date Posted:</b> {mdxNode.frontmatter.date}
        </p>
        <b>Last Modified:</b> {mdxNode.parent.modifiedTime}
        <p>
          <b>Tags</b>:
          <div className="tag-list">
            {tags}
          </div>
        </p>
      </section>
      <section id="blog-post-content">{children}</section>
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
        tags
        description
      }
      parent {
        ... on File {
          modifiedTime(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
`;
