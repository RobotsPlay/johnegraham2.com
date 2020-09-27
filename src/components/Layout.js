import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from './Footer'
import Header from './Header'

import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import LayoutStyles from '../styles/LayoutStyles'
import SkillListStyles from '../styles/SkillListStyles'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "0.jpg" }) {
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

      <Header images={data} />

      <main className="page-main">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
