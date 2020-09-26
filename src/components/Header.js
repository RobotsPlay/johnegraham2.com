import React from 'react'

import bioImage from '../assets/img/0.jpg'
import PageHeaderStyles from '../styles/PageHeaderStyles'

const Header = () => (
  <PageHeaderStyles className="page-header">
    <div className="container">
      <div className="flex-row">
        <div className="flex-col flex-col-8">
          <div className="text-right">
            <h1 className="site-title">John Graham</h1>
            <h2 className="site-subtitle">FrontEnd Web Developer</h2>
          </div>
        </div>

        <div className="flex-col flex-col-4">
          <div className="bio-image">
            <img src={bioImage} alt="John Graham" />
          </div>
        </div>
      </div>
    </div>
  </PageHeaderStyles>
)

export default Header
