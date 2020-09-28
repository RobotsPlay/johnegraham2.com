import React from 'react'
import PageFooterStyles from '../styles/PageFooterStyles'
import SocialLinks from './SocialLinks'

const Footer = () => (
  <PageFooterStyles className="page-footer">
    <div className="container">
      <div className="flex-row flex-justify-space-between flex-row-mobile-column-reverse">
        <div className="flex-col flex-col-6 flex-col-mobile-full">
          <div className="copyright text-center-mobile">
            © {new Date().getFullYear()} John Graham
          </div>
        </div>
        <div className="flex-col flex-col-6 flex-col-mobile-full text-right text-center-mobile">
          <SocialLinks />
        </div>
      </div>
    </div>
  </PageFooterStyles>
)

export default Footer
