require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://milenagroup.com`,
    title: "Milena Group",
    description:"Milena's leadership team is comprised of the industry's most experienced leaders, who have secured our place as one of the Dubai greatest company management and lifestyle developers.",
    twitter: "",
    banner:"/logo.png",
    googleConsole:" "
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 60
      },
    },
    "gatsby-plugin-image",
    `gatsby-alias-imports`,
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/assets/data/",
      },
      __key: "data",
    },

    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: `G-V8J38H9E3Y`,
    //     head: false,
    //   },
    // },
  ],
};
