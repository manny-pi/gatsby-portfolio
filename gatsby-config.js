/**
 * @type {import('gatsby').GatsbyConfig}
 */

blogFilesystemOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "blog",
    path: `${__dirname}/src/content/blog`,
  },
};

lwmFilesystemOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "learn-with-me",
    path: `${__dirname}/src/content/learn-with-me`,
  },
};

portfolioFilesystemOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "portfolio",
    path: `${__dirname}/src/content/portfolio`,
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
    blogFilesystemOptions,
    lwmFilesystemOptions,
    portfolioFilesystemOptions
  ],
};
