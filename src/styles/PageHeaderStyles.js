import styled from 'styled-components'

const PageHeaderStyles = styled.header`
  padding: var(--gutter) 0;
  background: var(--green);
  color: var(--lightyellow);
  border-top: 0.4rem solid var(--lightgreen);
  border-bottom: 1.2rem solid var(--lightgreen);

  .site-title {
    font-size: 5rem;
  }

  .site-subtitle {
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--lightgreen);
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
    border: var(--gutter-half) solid var(--orange);
    max-width: 340px;
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
