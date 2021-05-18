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

import robotoMedium from '../assets/fonts/roboto-medium.woff2'
import robotoBold from '../assets/fonts/roboto-bold.woff2'
import robotoLight from '../assets/fonts/roboto-light.woff2'
import robotoMono from '../assets/fonts/roboto-mono.woff2'

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
        <link rel="preload" href={`${robotoMedium}`} as="font" type="font/woff2" crossorigin />
        <link rel="preload" href={`${robotoBold}`} as="font" type="font/woff2" crossorigin />
        <link rel="preload" href={`${robotoLight}`} as="font" type="font/woff2" crossorigin />
        <link rel="preload" href={`${robotoMono}`} as="font" type="font/woff2" crossorigin />

      </Helmet>

      <Header images={data} />

      <main className="page-main">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
