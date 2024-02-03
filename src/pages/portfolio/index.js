import * as React from "react";
import Layout from "../../base-components/layout.js";
import { graphql } from "gatsby";
import { Button, ButtonGroup } from "@material-tailwind/react";
import { Link } from "gatsby";

export default function LWMIndex({ data }) {
  let nodes = data.allMdx.nodes;
  return (
    <Layout>
      <div>
        {nodes.map((node) => {
          let fm = node.frontmatter;
          return (
            <div key={node.id}>
              <Link to={fm.slug}>
                <Button variant="text">{fm.title}</Button>
              </Link>
            </div>
          );
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
