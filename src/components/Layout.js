import React from 'react'
import Footer from './Footer'
import Header from './Header'

import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import LayoutStyles from '../styles/LayoutStyles'

const Layout = ({ children }) => (
  <div className="page-wrapper">
    <GlobalStyles />
    <Typography />
    <LayoutStyles />

    <Header />

    <main className="page-main">{children}</main>

    <Footer />
  </div>
)

export default Layout
