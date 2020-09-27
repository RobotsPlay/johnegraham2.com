import React from 'react'
import { FaTwitter, FaCodepen, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import PageFooterStyles from '../styles/PageFooterStyles'

const Footer = () => (
  <PageFooterStyles className="page-footer">
    <div className="container">
      <div className="flex-row flex-justify-space-between">
        <div className="flex-col flex-col-6">
          <div className="copyright">
            © {new Date().getFullYear()} John Graham
          </div>
        </div>
        <div className="flex-col flex-col-6 text-right">
          <a
            href="https://twitter.com/RobotsPlay"
            rel="noopener noreferrer"
            target="_blank"
            title="@RobotsPlay"
            className="footer-social-link"
          >
            <FaTwitter />
          </a>

          <a
            href="https://codepen.io/RobotsPlay"
            rel="noopener noreferrer"
            target="_blank"
            title="CodePen"
            className="footer-social-link"
          >
            <FaCodepen />
          </a>

          <a
            href="https://github.com/RobotsPlay"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
            className="footer-social-link"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/john-graham-178b6931"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
            className="footer-social-link"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  </PageFooterStyles>
)

export default Footer
