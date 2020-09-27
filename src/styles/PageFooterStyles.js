import styled from 'styled-components'

const PageFooterStyles = styled.footer`
  padding: var(--gutter-half) 0;
  background: var(--lightgreen);
  color: var(--black);

  .copyright {
    font-size: 1.4rem;
  }

  .footer-social-link {
    display: inline-block;
    margin: 0 var(--gutter-half);
    color: var(--black);

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export default PageFooterStyles
