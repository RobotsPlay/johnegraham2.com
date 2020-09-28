import React from 'react'
import { FaTwitter, FaCodepen, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SocialLinksStyles from '../styles/SocialLinksStyles'

const SocialLinks = ({ className = '' }) => (
  <SocialLinksStyles className={className}>
    <a
      href="https://twitter.com/RobotsPlay"
      rel="noopener noreferrer"
      target="_blank"
      title="@RobotsPlay"
      className="social-link"
    >
      <FaTwitter />
    </a>

    <a
      href="https://codepen.io/RobotsPlay"
      rel="noopener noreferrer"
      target="_blank"
      title="CodePen"
      className="social-link"
    >
      <FaCodepen />
    </a>

    <a
      href="https://github.com/RobotsPlay"
      rel="noopener noreferrer"
      target="_blank"
      title="GitHub"
      className="social-link"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/john-graham-178b6931"
      rel="noopener noreferrer"
      target="_blank"
      title="LinkedIn"
      className="social-link"
    >
      <FaLinkedinIn />
    </a>
  </SocialLinksStyles>
)

export default SocialLinks
