const path = require('path');


module.exports = {
  pathPrefix: '/cdai-design/pal',
  siteMetadata: {
    title: 'Carbon for Cloud and Cognitive - Pattern asset library',
    description: 'Product design library for IBM Cloud, Data and Security',
    keywords: 'cloud,data,AI,design,pattern,asset,library,pal,security',
  },
  plugins: [
     {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 1152,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.ibm.com/cdai-design/pal',
          subDirectory: '/',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cloud, Data and AI Design',
        short_name: 'Cloud, Data and AI Design',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '4',
        matomoUrl: 'https://hcd-matomo.w3ibm.mybluemix.net',
        siteUrl: 'https://pages.github.ibm.com/cdai-design/pal',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/SVGLibraries/shared/data`
      }
    }
  ],
};
