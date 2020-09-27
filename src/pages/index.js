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

import b2ba from '../assets/img/b2b-autotrader.jpg'
import monarch from '../assets/img/monarch.jpg'
import sacscoc from '../assets/img/sacscoc.jpg'
import monarchmap from '../assets/img/monarchmap.jpg'
import act from '../assets/img/act.jpg'
import nada from '../assets/img/nada.jpg'
import rvs from '../assets/img/rvs.jpg'
import express from '../assets/img/express.jpg'
import jg2 from '../assets/img/jg2.jpg'
import Button from '../components/Button'

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

          <p>
            <Button
              label="Contact Me"
              onClick={() => window.open('https://twitter.com/RobotsPlay')}
            />
          </p>
        </div>
      </div>
    </ContentSection>

    <ContentSection>
      <h2>My Experience</h2>

      <div className="flex-row flex-align-center flex-row-mobile-column-reverse">
        <div className="flex-col flex-col-4 flex-col-mobile-full">
          <div className="content-image">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Code in a text editor"
            />
          </div>
        </div>

        <div className="flex-col flex-col-8 flex-col-mobile-full">
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
            <li>
              Over the years, I have built dozens and dozens of websites,
              WordPress sites and custom WordPress plugins.
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

      <ul className="project-list">
        <li className="project-list-project">
          <a
            href="https://b2b.autotrader.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={b2ba}
              alt="B2B Autotrader Homepage"
            />

            <div className="project-list-title">b2b.autotrader.com</div>

            <div className="project-list-description">
              I led the dev team for AutoTrader's B2B all new website, built
              from the ground up leveraging the WordPress block editor and a
              component driven build system using Storybook. I did a large part
              of the development for this site.
            </div>
          </a>
        </li>

        <li className="project-list-project">
          <a
            href="https://www.monarchprivate.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={monarch}
              alt="Monarch ESG Homepage"
            />

            <div className="project-list-title">Monarch ESG</div>

            <div className="project-list-description">
              I led the dev team for the Monarch ESG website using the WordPress
              block editor and a component driven build system using Storybook.
              I did some dev work on this site including a Vue.js state map
              application, but development on this site was largely a team
              effort.
            </div>
          </a>
        </li>
      </ul>
    </ContentSection>

    <ContentSection>
      <h2>Vue.js Apps</h2>

      <ul className="project-list">
        <li className="project-list-project">
          <a
            href="https://www.monarchprivate.com/esg-investment-types/state-tax-credits/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={monarchmap}
              alt="Monarch ESG State Map Tool"
            />

            <div className="project-list-title">
              Monarch ESG State Tax Credits Map
            </div>

            <div className="project-list-description" />
          </a>
        </li>

        <li className="project-list-project">
          <a
            href="https://sacscoc.org/institutions/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={sacscoc}
              alt="SACS COC Instituion Search Page"
            />

            <div className="project-list-title">
              SACS COC Institution Search
            </div>

            <div className="project-list-description" />
          </a>
        </li>

        <li className="project-list-project">
          <a
            href="https://assessmentplanner.act.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={act}
              alt="ACT Online Assessment Planner Tool"
            />

            <div className="project-list-title">ACT Assessment Planner</div>

            <div className="project-list-description" />
          </a>
        </li>

        <li className="project-list-project">
          <a
            href="https://www.coxautoinc.com/events/nada2020/autotrader/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={nada}
              alt="NADA Signup Page"
            />

            <div className="project-list-title">
              Cox Automotive NADA Demo Signups
            </div>

            <div className="project-list-description" />
          </a>
        </li>
      </ul>
    </ContentSection>

    <ContentSection>
      <h2>React.js Apps</h2>

      <ul className="project-list">
        <li className="project-list-project">
          <a
            href="https://rvs.autotrader.com/rvs-for-sale/airstream-ambassador-for-sale?year_max=1976&year_min=1965"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={rvs}
              alt="RVs.Autorader.com Search Results Page"
            />

            <div className="project-list-title">
              RVs on Autotrader Search Results
            </div>

            <div className="project-list-description" />
          </a>
        </li>

        <li className="project-list-project">
          <a
            href="https://www.mymanheim.com/express/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={express}
              alt="Manheim Express Homepage"
            />

            <div className="project-list-title">
              Contributed React Native components on Manheim Express
            </div>

            <div className="project-list-description" />
          </a>
        </li>

        <li className="project-list-project">
          <a
            href="https://prism.coxautoinc.com/Getting-Started"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-list-image"
              src={jg2}
              alt="Cox Automotive Prism Library Homepage"
            />

            <div className="project-list-title">John Graham's Portfolio</div>

            <div className="project-list-description">
              This very site is built using Gatsby.js and React.
            </div>
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
