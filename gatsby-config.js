module.exports = {
  pathPrefix: '/cdai-design/pal',
  siteMetadata: {
    title: 'CD&AI Design - Pattern asset library',
    description: 'Design information for the Cloud, Data and AI organizations',
    keywords: 'cloud,data,AI,design,pattern,asset,library,pal',
  },
  plugins: [
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
    }
  ],
};
