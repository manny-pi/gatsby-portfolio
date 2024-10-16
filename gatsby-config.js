/*
`gatsby-config` is for setting up plugins, and other
components that extend the functionality of the system. 
*/

/**
 * @type {import('gatsby').GatsbyConfig}
 */

blogFilesystemOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "blog",
    path: `${__dirname}/src/content/blog/`,
  },
};

lwmFilesystemOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "learn-with-me",
    path: `${__dirname}/src/content/learn-with-me/`,
  },
};

portfolioFilesystemOptions = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "portfolio",
    path: `${__dirname}/src/content/portfolio/`,
  },
};

module.exports = {
  siteMetadata: {
    title: `Gatsby-Portfolio`,
    siteUrl: `https://prince-o.dev`,
  },
  flags: {
    // DEV_SSR: true
  },
  plugins: [
    blogFilesystemOptions,
    lwmFilesystemOptions,
    portfolioFilesystemOptions,
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
  ],
};


