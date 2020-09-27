const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `John Graham | FrontEnd Web Developer`,
    description: `The personal frontend web development portolio site of John Graham`,
    author: `@RobotsPlay`,
    siteUrl: 'https://johnegraham2.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `img`),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://johnegraham2.com',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
