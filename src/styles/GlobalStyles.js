import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    // colors
    --darkorange: #BF7111;
    --orange: #CC6D1E;
    --black: #240C07;
    --yellow: #F2CF66;
    --lightyellow: #F4EFDD;
    --white: #F3F3EB;
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
