import React from 'react'

import ContactPanelStyles from '../styles/ContactPanelStyles'
import Button from './Button'
import SocialLinks from './SocialLinks'

const ContactPanel = ({ open = false, openToggle = () => {} }) => {
  // const submitContactForm = e => {
  //   e?.preventDefault()
  // }

  return (
    <ContactPanelStyles className={`contact-panel ${open ? 'open' : ''}`}>
      <>
        <button type="button" className="close-button" onClick={openToggle}>
          &times;
        </button>

        <h3 className="contact-panel-title"> Get In Touch</h3>

        <h4>Look me up on one of these:</h4>

        <SocialLinks className="spread" />

        <h4>Or, send me a message:</h4>

        <form name="contact"
          method="post"
          action="/thanks/"
          className="form" 
          data-netlify
          netlify-honeypot="bot-field"
        >
          <label className="form-label" htmlFor="your-name">
            Your Name
            <input type="text" className="form-field text" id="your-name" name="Name" required />
          </label>

          <label className="form-label" htmlFor="your-email">
            Your Email
            <input type="email" className="form-field text" id="your-email" name="Email" required />
          </label>

          <label className="form-label" htmlFor="your-message">
            Message
            <textarea className="form-field textarea" id="your-message" name="Message" required />
          </label>

          <label
            className="form-label checkbox-label"
            htmlFor="not-a-recruiter"
          >
            <input
              type="checkbox"
              className="form-field checkbox"
              id="not-a-recruiter"
              required
              name="No Recuiters"
            />
            I am not a 3rd party recruiter
          </label>

          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <Button type="submit" label="Send" />
        </form>
      </>
    </ContactPanelStyles>
  )
}

export default ContactPanel
