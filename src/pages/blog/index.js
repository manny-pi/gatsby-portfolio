import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../base-components/layout.js";

function TagSelector({ nodes }) {

  let {selectedTags, setSelectedTags} = React.useState([]);
  
  function filterPosts() {
    let form = document.querySelector("form");
    let data = new FormData(form);
    // setSelectedTags(Array.from(data.keys()));
  }
  
  // Get all the tags for the blog posts
  let allTags = [];
  nodes.forEach((node) => {
    // Handles the cases where the post doesn't have tags yet.
    try {
      node.frontmatter.tags.forEach((tag) => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      });
    } catch (e) {
      /* Do nothing */
    }
  });

  return (
    <div className="post-filter">
      <form onClick={filterPosts}>
          {allTags.map((tag) => {
            return (
              <div className="filter-button">
                <input type="checkbox" id={tag} name={tag} value={tag} />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
      </form>
    </div>
  );
}

export default function BlogIndex({ data }) {
  const nodes = data.allMdx.nodes;

  // Sort blog posts by date
  // let entries = Object.entries(nodes).sort((p1, p2) => {(new Date(p1[1].date)) - (new Date(p2[1].date))});
  // let sortedEntries = Object.fromEntries(entries);

  return (
    <Layout>
      <div>
        <TagSelector nodes={nodes} />
      </div>
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
    allMdx(filter: { frontmatter: { app: { eq: "blog" } } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date
          tags
          description
        }
      }
    }
  }
`;
