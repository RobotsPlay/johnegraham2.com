import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaNpm,
  FaWordpressSimple,
  FaGit,
} from 'react-icons/fa'
import { SiWebpack } from 'react-icons/si'

import ContentSection from '../components/ContentSection'

const IndexPage = ({ data }) => (
  <>
    <ContentSection>
      <div className="flex-row">
        <div className="flex-col flex-col-8 flex-col-mobile-full">
          <h2>A Little Bit About Me</h2>

          <p>I like to build things, specifically the frontends of websites.</p>

          <p>
            I have been building client websites for{' '}
            <a
              href="https://www.airtightdesign.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              AirTight Design
            </a>{' '}
            for over 11 years and have been the lead front end developer since
            the end of 2014. In addition to assembling HTML, CSS and Javascript,
            I lead a team of 5 developers. I am responsible for developing and
            implementing best practices and processes for the team.
          </p>
        </div>
      </div>
    </ContentSection>

    <ContentSection>
      <h2>My Experience</h2>

      <div className="flex-row flex-align-center">
        <div className="flex-col flex-col-4">
          <div className="content-image">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Code in a text editor"
            />
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

      <ul className="skill-list">
        <li className="skill-list-skill">
          <FaHtml5 className="skill-list-icon" /> HTML
        </li>
        <li className="skill-list-skill">
          <FaCss3Alt className="skill-list-icon" /> CSS
        </li>
        <li className="skill-list-skill">
          <FaJsSquare className="skill-list-icon" /> JavaScript
        </li>
        <li className="skill-list-skill">
          <FaReact className="skill-list-icon" /> React
        </li>
        <li className="skill-list-skill">
          <FaVuejs className="skill-list-icon" /> Vue.js
        </li>
        <li className="skill-list-skill">
          <SiWebpack className="skill-list-icon" /> Webpack
        </li>
        <li className="skill-list-skill">
          <FaNpm className="skill-list-icon" /> npm
        </li>
        <li className="skill-list-skill">
          <FaWordpressSimple className="skill-list-icon" /> WordPress
        </li>
        <li className="skill-list-skill">
          <FaGit className="skill-list-icon" /> git
        </li>
      </ul>
    </ContentSection>

    <ContentSection>
      <h2>FrontEnd Web Development Projects</h2>

      <ul>
        <li>
          <a
            href="https://b2b.autotrader.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            b2b.autotrader.com
          </a>
        </li>

        <li>
          <a
            href="https://www.monarchprivate.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Monarch ESG
          </a>
        </li>
      </ul>
    </ContentSection>

    <ContentSection>
      <h2>Vue.js Apps</h2>

      <ul>
        <li>
          <a
            href="https://b2b.autotrader.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            b2b.autotrader.com
          </a>
        </li>

        <li>
          <a
            href="https://www.monarchprivate.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Monarch ESG
          </a>
        </li>

        <li>
          <a
            href="https://b2b.autotrader.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            b2b.autotrader.com
          </a>
        </li>

        <li>
          <a
            href="https://www.monarchprivate.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Monarch ESG
          </a>
        </li>
      </ul>
    </ContentSection>

    <ContentSection>
      <h2>React.js Apps</h2>

      <ul>
        <li>
          <a
            href="https://b2b.autotrader.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            b2b.autotrader.com
          </a>
        </li>

        <li>
          <a
            href="https://www.monarchprivate.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Monarch ESG
          </a>
        </li>

        <li>
          <a
            href="https://b2b.autotrader.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            b2b.autotrader.com
          </a>
        </li>
      </ul>
    </ContentSection>
  </>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 376) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
