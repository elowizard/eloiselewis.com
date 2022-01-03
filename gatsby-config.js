module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "defaultGatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/blog/",
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "kenyaimages",
        path: "./src/images/kenya/",
      },
      __key: "misc",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "miscellaneousimages",
        path: "./src/images/miscellaneous/",
      },
      __key: "miscellaneousimages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:400,500,600,800`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
