const path = require("path");

module.exports = {
  pathPrefix: "/cdai-design/pal",
  siteMetadata: {
    title: "Carbon for Cloud and Cognitive - Pattern asset library",
    description: "Product design library for IBM Cloud, Data and Security",
    keywords: "cloud,data,AI,design,pattern,asset,library,pal,security"
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  plugins: [
    {
      resolve: "gatsby-remark-images",
      options: {
        maxWidth: 1152
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-theme-carbon",
      options: {
        repository: {
          baseUrl: "https://github.ibm.com/cdai-design/pal",
          branch: "master"
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Cloud, Data and AI Design",
        short_name: "Cloud, Data and AI Design",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
        icons: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/SVGLibraries/shared/data`
      }
    }
  ]
};
