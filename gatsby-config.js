module.exports = {
  siteMetadata: {
    title: `Platormable code generator`,
    description: `We measure the value of open ecosystems`,
    author: `Platformable.com`,
  },
 flags: {
   DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://websiteserver-ds7cf.ondigitalocean.app`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name:'posts',
            endpoint:'posts'
          }
          ,
          {
            name:'media',
            endpoint:'upload/files'
          }
        ]
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}
