/**
 * @type {import('gatsby').GatsbyConfig}
 */

blogMdxOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "blog",
    path: `${__dirname}/src/content/blog`,
  },
};

lwmMdxOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "learn-with-me",
    path: `${__dirname}/src/content/learn-with-me`,
  },
};

module.exports = {
  siteMetadata: {
    title: `Gatsby-Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    blogMdxOptions,
    lwmMdxOptions,
  ],
};
