import React from 'react'
import {Link} from 'gatsby'

import ContentSection from '../components/ContentSection'

const ThanksPage = () => (
  <>
    <ContentSection>
      <div className="flex-row">
        <div className="flex-col flex-col-8 flex-col-mobile-full">
          <h2>Thanks, I'll get back to you.</h2>
    
          <p>
            <Link to="/">Back</Link>
          </p>
        </div>
      </div>
    </ContentSection>
  </>
)
export default ThanksPage
