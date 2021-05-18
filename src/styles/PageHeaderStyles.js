import styled from 'styled-components'

const PageHeaderStyles = styled.header`
  padding: var(--gutter) 0;
  background: var(--purple);
  color: var(--white);
  border-top: 0.4rem solid var(--medpurple);
  border-bottom: 1.2rem solid var(--medpurple);

  .site-title {
    font-size: 5rem;
  }

  .site-subtitle {
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--white);
    width: 70%;
    margin-left: 30%;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .bio-image {
    transform: translateY(-7.2rem);
    border-radius: 50%;
    border: var(--gutter-quarter) solid var(--medpurple);
    max-width: 260px;
    margin-bottom: -100%;

    @media (max-width: 767px) {
      max-width: 150px;
      margin: 0 auto var(--gutter);
      transform: none;
    }
  }

  .bio-image img {
    display: block;
    border-radius: 50%;
    max-width: 100%;
  }
`

export default PageHeaderStyles
