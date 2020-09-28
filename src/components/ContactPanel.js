import React from 'react'

import ContactPanelStyles from '../styles/ContactPanelStyles'
import Button from './Button'
import SocialLinks from './SocialLinks'

const ContactPanel = ({ open = false, openToggle = () => {} }) => {
  const submitContactForm = e => {
    e?.preventDefault()
  }

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

        <form className="form" onSubmit={submitContactForm}>
          <label className="form-label" htmlFor="your-name">
            Your Name
            <input type="text" className="form-field text" id="your-name" />
          </label>

          <label className="form-label" htmlFor="your-email">
            Your Email
            <input type="email" className="form-field text" id="your-email" />
          </label>

          <label className="form-label" htmlFor="your-message">
            Message
            <textarea className="form-field textarea" id="your-message" />
          </label>

          <label
            className="form-label checkbox-label"
            htmlFor="not-a-recruiter"
          >
            <input
              type="checkbox"
              className="form-field checkbox"
              id="not-a-recruiter"
            />
            I am not a 3rd party recruiter
          </label>

          <Button type="submit" label="Send" />
        </form>
      </>
    </ContactPanelStyles>
  )
}

export default ContactPanel
