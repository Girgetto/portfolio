require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Giorgio Grassini",
    author: `Giorgio Grassini`,
    description: `Personal blog by Giorgio Grassini.`,
    siteUrl: `https://girgetto.github.io/portfolio/`,
    social: {
      twitter: `__Giorgio_`,
    },
  },
  pathPrefix: `/portfolio`,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-94BPMNJK7N"],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-bundle-stats",
      options: {
        compare: true,
        outDir: "../artifacts",
        stats: {
          context: "./src",
        },
      },
    },
  ],
};
