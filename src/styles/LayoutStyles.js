import { createGlobalStyle } from 'styled-components'

const LayoutStyles = createGlobalStyle`
  .page-wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .page-main {
    color: var(--black);
  }

  .container {
      width: calc(100vw - var(--gutter-double));
      max-width: 120rem;
      margin: 0 auto;
  }

  .flex-row {
      display: flex;
  }

  .flex-wrap {
      flex-wrap: wrap;
  }

  .flex-align-center {
      align-items: center;
  }

  .flex-col {
    padding: 0 var(--gutter-half);
  }

  .flex-col:first-child {
    padding-left: 0;
  }

  .flex-col:last-child {
      padding-right: 0;
  }

  .flex-col-6 {
      width: 50%;
  }

  .flex-col-4 {
    width: 33.33%;
  }

  .flex-col-8 {
    width: 66.67%;
  }

  .flex-col-3 {
    width: 25%;
  }

  .flex-col-9 {
    width: 75%;
  }

  @media (max-width: 767px) {
    .flex-col-mobile-full {
      width: 100%;
      padding: 0;
    }

    .flex-row-mobile-column-reverse {
      flex-direction: column-reverse;
    }
  }
`

export default LayoutStyles
