const path = require("path");

module.exports = {
  pathPrefix: "/cdai-design/pal",
  siteMetadata: {
    title: "Carbon for IBM Products",
    description: "Product design library for IBM Cloud, Data and Security",
    keywords: "cloud,data,AI,design,pattern,asset,library,pal,security"
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
          branch: "main"
        },
        iconPath: './src/images/carbon-for-ibm-product.png',
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
