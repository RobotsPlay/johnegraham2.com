import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    // colors
    --darkorange: #9b5a0a;
    --orange: #BF7111;
    --black: #240C07;
    --yellow: #F2E7C7;
    --lightyellow: #FFFFF6;
    --white: #fff;
    --brown: #591F12;
    --green: #0E5952;
    --lightgreen: #89B69D;
    --verylightgreen: #e6f1eb;
    --lightgray: #e3e3e3;
    --verylightgray: #f7f7f7;
    --purple: #3e2178;
    --medpurple: #5c3f98; 

    // layout
    --gutter: 3.6rem;
    --gutter-double: 7.2rem;
    --gutter-half: 1.8rem;
    --gutter-quarter: 0.9rem;
    --gutter-neg: -3.6rem;
    --gutter-half-neg: -1.8rem;
  }

  * {
      box-sizing: border-box;
  }

  html {

  }

  body {
    background: var(--white);
  }
`

export default GlobalStyles
