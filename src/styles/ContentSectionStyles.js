import styled from 'styled-components'

const ContentSectionStyles = styled.section`
  padding: var(--gutter) 0;

  &:first-child {
    padding-top: var(--gutter-double);
  }

  &:last-child {
    padding-bottom: var(--gutter-double);
  }

  &:nth-child(even) {
    background: var(--lightyellow);
    color: var(--brown);
    border-top: 1px solid var(--yellow);
    border-bottom: 1px solid var(--yellow);
  }

  h1,
  h2,
  h3 {
    border-bottom: 1px solid var(--lightgreen);
    padding-bottom: 4px;
    margin-bottom: var(--gutter);
  }

  .content-image {
    width: 100%;
    background: var(--darkorange);
    padding: 3px;
  }

  .content-image img {
    display: block;
    width: 100%;
  }
`

export default ContentSectionStyles
