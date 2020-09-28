import styled from 'styled-components'

const ContactPanelStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 450px;
  background: var(--white);
  padding: var(--gutter);
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease-in-out;
  transform: translateX(-100%);
  overflow-y: auto;

  .contact-panel-title {
    font-size: 3.2rem;
  }

  &.open {
    transform: translateX(0);
  }

  .contact-panel-title {
    margin-bottom: var(--gutter);
  }

  .form {
    margin-top: var(--gutter);
  }

  .form-label {
    display: block;
    margin-bottom: var(--gutter);
    font-size: 1.6rem;
  }

  .checkbox-label {
    display: flex;
    justify-content: flex-start;
  }

  .form-field {
    display: block;
    width: 100%;
    padding: 0.6rem;
    margin-top: 0.6rem;
    font-size: 2rem;
    border: 1px solid var(--lightgreen);
    color: var(--orange);

    &.textarea {
      resize: none;
      height: 14rem;
    }

    &.checkbox {
      width: auto;
      margin-right: 1.8rem;
    }

    &:focus {
      outline: none;
      border-color: var(--green);
    }
  }

  .close-button {
    border: none;
    background: none;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3.2rem;
    padding: var(--gutter-half);
    color: var(--lightgreen);
    cursor: pointer;

    &:focus,
    &:active {
      outline: none;
    }
  }
`

export default ContactPanelStyles
