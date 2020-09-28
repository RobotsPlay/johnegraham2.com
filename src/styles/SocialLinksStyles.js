import styled from 'styled-components'

const SocialLinksStyles = styled.div`
  .social-link {
    display: inline-block;
    margin: 0 var(--gutter-half);
    color: var(--black);

    @media (max-width: 767px) {
      font-size: 4rem;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &.spread {
    display: flex;
    justify-content: center;
    margin: var(--gutter) 0;

    .social-link {
      margin: 0 var(--gutter);
      font-size: 4rem;
    }
  }
`

export default SocialLinksStyles
