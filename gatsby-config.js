require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: "ProAca Blog",
    description: "Gatsbyで作成したブログサイトです。",
    author: "SatYus",
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.YOUR_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }

    }
  ],
}
