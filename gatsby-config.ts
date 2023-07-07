import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
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
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
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
  }, `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            weights: [
              "300",
              "300i",
              "400",
              "400i",
              "700",
              "700i"
            ]
          },
          {
            family: `Sancreek`,
            weights: [`400`, `700`]
          },
          {
            family: `Ubuntu`,
            weights: [`400`,`500`, `700`]
          },
        ],
      },
    },
  ]
};

export default config;
