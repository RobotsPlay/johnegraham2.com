import React from 'react'

import codeImage from '../assets/img/code.jpg'
import ContentSection from '../components/ContentSection'

const IndexPage = () => (
  <>
    <ContentSection>
      <div className="flex-row">
        <div className="flex-col flex-col-8">
          <h2>A Little Bit About Me</h2>
        </div>
      </div>
    </ContentSection>

    <ContentSection>
      <h2>My Experience</h2>

      <div className="flex-row flex-align-center">
        <div className="flex-col flex-col-4">
          <div className="content-image">
            <img src={codeImage} alt="Code in a text editor" />
          </div>
        </div>

        <div className="flex-col flex-col-8">
          <ul>
            <li>
              I have <strong>12+ years</strong> experience in frontend web
              development.
            </li>
            <li>
              I have <strong>6+ years</strong> as frontend lead developer.
            </li>
            <li>
              I have managed a team of <strong>up to 7</strong> frontend devs.
            </li>
          </ul>
        </div>
      </div>
    </ContentSection>

    <ContentSection>
      <h2>My Skills and Technologies</h2>
    </ContentSection>

    <ContentSection>
      <h2>FrontEnd Web Development Projects</h2>

      <ul>
        <li>
          <a href="https://www.monarchprivate.com/esg-investment-types/state-tax-credits/">
            Monarch ESG State Tax Credits Map
          </a>
        </li>
      </ul>
    </ContentSection>

    <ContentSection>
      <h2>Vue.js Apps</h2>
    </ContentSection>

    <ContentSection>
      <h2>React.js Apps</h2>
    </ContentSection>

    <ContentSection>
      <h2>Links to Some of My Stuff</h2>
    </ContentSection>
  </>
)

export default IndexPage
