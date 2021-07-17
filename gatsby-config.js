const rss = require("./utils/rss-options");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "<dev/null>",
    description: "Facundo Lopez personal blog",
    siteUrl: process.env.BASE_URL,
    body: {
      content: "Just some SEO content",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-feed",
      options: rss.options,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 500 },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              lassPrefix: "language-js",
              aliases: {
                es6: "js",
              },
              showLineNumbers: true,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dev/null`,
        short_name: `dev/null`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png",
        icons: [
          {
            src: "src/images/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "src/images/maskable_icon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
