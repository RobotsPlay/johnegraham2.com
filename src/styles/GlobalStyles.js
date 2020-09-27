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

    // layout
    --gutter: 3.6rem;
    --gutter-double: 7.2rem;
    --gutter-half: 1.8rem;
  }

  * {
      box-sizing: border-box;
  }

  html {

  }

  body {
    background var(--white);
  }

`

export default GlobalStyles
