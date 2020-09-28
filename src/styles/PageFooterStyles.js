import styled from 'styled-components'

const PageFooterStyles = styled.footer`
  padding: var(--gutter-half) 0;
  background: var(--lightgreen);
  color: var(--black);

  @media (max-width: 767px) {
    padding: var(--gutter) 0;
  }

  .copyright {
    font-size: 1.4rem;

    @media (max-width: 767px) {
      margin-top: var(--gutter-half);
    }
  }
`

export default PageFooterStyles
