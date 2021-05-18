import styled from 'styled-components'

const ContentSectionStyles = styled.section`
  padding: var(--gutter-double) 0;

  &:nth-child(even) {
    background: var(--verylightgray);
    color: var(--black);
    border-top: 1px solid var(--lightgray);
    border-bottom: 1px solid var(--lightgray);
  }

  h1,
  h2,
  h3 {
    border-bottom: 1px solid var(--lightgray);
    padding-bottom: 4px;
    margin-bottom: var(--gutter);
  }

  .content-image {
    width: 100%;
    background: var(--purple);
    padding: 1px;

    @media (max-width: 767px) {
      margin: var(--gutter) auto 0;
      max-width: 376px;
    }
  }

  .content-image img {
    display: block;
    width: 100%;
  }

  .project-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 -1.8rem -3.6rem !important;

    &-project {
      width: calc(33.33% - var(--gutter));
      margin: 0 var(--gutter-half) var(--gutter);
      display: flex;
      align-items: center;

      @media (max-width: 1023px) {
        width: calc(50% - var(--gutter));
      }

      @media (max-width: 580px) {
        width: calc(100%);
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
        background: var(--white);
        border: 1px solid var(--lightgray);
        box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .1);
        padding: var(--gutter);
        text-decoration: none;
        color: var(--black);
      }
    }

    &-image {
      display: block;
      max-width: 100%;
      border: 1px solid var(--lightgray);
    }

    &-title {
      margin-top: var(--gutter);
      font-size: 2.4rem;
      line-height: 1.2;
    }

    &-description {
      margin-top: var(--gutter-half);
      font-size: 1.6rem;

      @media (max-width: 767px) {
        font-size: 1.8rem;
      }
    }

    &-note {
      margin-top: var(--gutter-half);
      font-size: 1.4rem;
      text-align: right;
    }
  }
`

export default ContentSectionStyles
