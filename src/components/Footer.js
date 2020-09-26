import React from 'react'
import PageFooterStyles from '../styles/PageFooterStyles'

const Footer = () => (
  <PageFooterStyles className="page-footer">
    <div className="container">
      <p>© {new Date().getFullYear()} John Graham</p>
    </div>
  </PageFooterStyles>
)

export default Footer
