import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import PageHeaderStyles from '../styles/PageHeaderStyles'

const Header = () => (
  <PageHeaderStyles className="page-header">
    <div className="container">
      <div className="flex-row flex-wrap flex-row-mobile-column-reverse">
        <div className="flex-col flex-col-8 flex-col-mobile-full">
          <div className="text-right text-center-mobile">
            <h1 className="site-title">John Graham</h1>
            <h2 className="site-subtitle">Front-End Web Developer</h2>
          </div>
        </div>

        <div className="flex-col flex-col-4 flex-col-mobile-full">
          <div className="bio-image">
            <StaticImage
              src="../assets/img/johngraham.jpg"
              alt="John Graham"
              placeholder="blurred"
              layout="constrained"
              width={260}
              height={260}
            />
          </div>
        </div>
      </div>
    </div>
  </PageHeaderStyles>
)

export default Header
