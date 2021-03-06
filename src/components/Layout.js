import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header from './Header'

import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import LayoutStyles from '../styles/LayoutStyles'
import SkillListStyles from '../styles/SkillListStyles'

import favicon from '../../static/favicon.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { eq: "johngraham.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 304) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div className="page-wrapper">
      <GlobalStyles />
      <Typography />
      <LayoutStyles />
      <SkillListStyles />

      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <link rel="icon" href={favicon} />
        <html lang="en" />
      </Helmet>

      <Header images={data} />

      <main className="page-main">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
