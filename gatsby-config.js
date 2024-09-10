/*
`gatsby-config` is for ... 
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

s3hostingOptions = {
  resolve: "gatsby-plugin-s3",
  options: {
    bucketName: "my-gatsby-portfolio"
  }
}

module.exports = {
  siteMetadata: {
    title: `Gatsby-Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-plugin-postcss",
    blogFilesystemOptions,
    lwmFilesystemOptions,
    portfolioFilesystemOptions,
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    s3hostingOptions
  ],
};


