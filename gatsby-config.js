require("dotenv").config()
const wpGraphQLUrl = process.env.WPGRAPHQL_URL || `https://wpgatsbydemo.wpengine.com/graphql`

module.exports = {
  siteMetadata: {
    title: `Gatsby Redux-Toolkit`,
    description: `Gatsby, Redux-Toolkit, Typescript starter`,
    author: `Cao Tran`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-redux-toolkit-typescript-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#667EEA`,
        theme_color: `#667EEA`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: wpGraphQLUrl,
      },
    },
  ]
};
