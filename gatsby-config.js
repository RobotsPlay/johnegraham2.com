const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `JohnEGraham.com`,
    description: `Personal/Portolio site of John Graham`,
    author: `@RobotsPlay`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `img`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
