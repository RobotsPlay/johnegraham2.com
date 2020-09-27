import React from 'react'
import Img from 'gatsby-image'

import bioImage from '../assets/img/0.jpg'
import PageHeaderStyles from '../styles/PageHeaderStyles'

const Header = ({ images }) => (
  <PageHeaderStyles className="page-header">
    <div className="container">
      <div className="flex-row flex-wrap flex-row-mobile-column-reverse">
        <div className="flex-col flex-col-8 flex-col-mobile-full">
          <div className="text-right text-center-mobile">
            <h1 className="site-title">John Graham</h1>
            <h2 className="site-subtitle">FrontEnd Web Developer</h2>
          </div>
        </div>

        <div className="flex-col flex-col-4 flex-col-mobile-full">
          <div className="bio-image">
            <Img fluid={images.file.childImageSharp.fluid} alt="John Graham" />
          </div>
        </div>
      </div>
    </div>
  </PageHeaderStyles>
)

export default Header
