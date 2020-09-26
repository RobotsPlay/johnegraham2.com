import React from 'react'
import ContentSectionStyles from '../styles/ContentSectionStyles'

const ContentSection = ({ children }) => (
  <ContentSectionStyles className="content-section">
    <div className="container">{children}</div>
  </ContentSectionStyles>
)

export default ContentSection
