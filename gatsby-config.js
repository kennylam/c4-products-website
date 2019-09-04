module.exports = {
  siteMetadata: {
    title: 'Cloud, Data and AI Design',
    description: 'Design information for the Cloud, Data and AI organizations',
    keywords: 'cloud,data,AI,design',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.ibm.com/CDAI-design/CDAI-design-website',
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
  ],
};
