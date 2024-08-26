import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio Gatsby`,
    description: `Portfolio for Daniel Su`,
    image: `src/images/face-3.png`,
    author: `Daniel Su`,
    siteUrl: `https://danielsu.info`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "0C9ALYbAP63_x4fsB0yQSdKvd6-uZKmkSgaQ6IqsHsE",
      "spaceId": "lly2eyffo90r"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images`
    },
    __key: "images"
  }]
};

export default config;
