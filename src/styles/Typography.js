import { createGlobalStyle } from 'styled-components'

import robotoMedium from '../assets/fonts/roboto-medium.woff2'
import robotoBold from '../assets/fonts/roboto-bold.woff2'
import robotoLight from '../assets/fonts/roboto-light.woff2'
import robotoMono from '../assets/fonts/roboto-mono.woff2'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${robotoLight}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${robotoMedium}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${robotoBold}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${robotoMono}) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }

  html {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color: var(--black);
    font-size: 62.5%;

    @media (max-width: 1023px) {
      font-size: 55%;
    }

    @media (max-width: 767px) {
      font-size: 45%;
    }
  }

  body {
    font-size: 2rem;
    line-height: 1.5;
  }

  h1,h2,h3 {
    font-weight: 300;
    line-height: 1;
    margin: 0;
  }

  h4,h5,h6 {
    font-weight: 500;
    line-height: 1;
    margin: 0;
  }

  p,
  ul,
  ol,
  dl {
    margin: var(--gutter-half) 0;
  }

  p:last-child,
  ul:last-child,
  ol:last-child,
  dl:last-child {
    margin-bottom: 0;
  }

  p:first-child,
  ul:first-child,
  ol:first-child,
  dl:first-child {
    margin-top: 0;
  }

  ul {
    padding-left: 20px;
  }

  
  a {
    color: var(--green);
    text-decoration: underline;
  }

  pre,
  code {
    font-family: 'Roboto Mono', monospace;
  }
  
  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  @media (max-width: 767px) {
   .text-center-mobile {
     text-align: center;
   } 
   
   .text-right-mobile {
      text-align: right;
    } 

    .text-left-mobile {
      text-align: left;
    } 
  }
`

export default Typography
