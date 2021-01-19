import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import Typography from 'Typography'
import 'normalize.css'

/**
 * Font Imports
 */

const fontFace = `
/**
 * @license
 * MyFonts Webfont Build ID 3998529, 2021-01-17T13:46:44-0500
 * 
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are 
 * explicitly restricted from using the Licensed Webfonts(s).
 * 
 * You may obtain a valid license at the URLs below.
 * 
 * Webfont: FilsonSoftHeavy by Mostardesign
 * URL: https://www.myfonts.com/fonts/mostardesign/filson-soft/heavy/
 * Copyright: Copyright &amp;#x00A9; 2016 by Olivier Gourvat. All rights reserved.
 * 
 * Webfont: FilsonProBook by Mostardesign
 * URL: https://www.myfonts.com/fonts/mostardesign/filson-pro/book/
 * Copyright: Copyright (c) Olivier Gourvat - Mostardesign Studio, 2019. All rights reserved.
 * 
 * Webfont: FilsonProMedium by Mostardesign
 * URL: https://www.myfonts.com/fonts/mostardesign/filson-pro/medium/
 * Copyright: Copyright (c) Olivier Gourvat - Mostardesign Studio, 2019. All rights reserved.
 * 
 * 
 * 
 * © 2021 MyFonts Inc
*/

/* @import must be at top of file, otherwise CSS will not work */
@import url("//hello.myfonts.net/count/3d0341");
  
@font-face {
  font-family: 'FilsonProMedium';
  src: url(${require('@assets/fonts/FilsonProMedium.woff2')}) format('woff2'),
       url(${require('@assets/fonts/FilsonProMedium.woff')}) format('woff');
}

@font-face {
  font-family: 'FilsonProBook';
  src: url(${require('@assets/fonts/FilsonProBook.woff2')}) format('woff2'),
       url(${require('@assets/fonts/FilsonProBook.woff')}) format('woff');
}

@font-face {
  font-family: 'FilsonSoftHeavy';
  src: url(${require('@assets/fonts/FilsonSoftHeavy.woff2')}) format('woff2'),
       url(${require('@assets/fonts/FilsonSoftHeavy.woff')}) format('woff');
}`

/**
 * Type Styling
 */

const typography = new Typography({
  title: 'MNyou',
  // explicitly imported to version dependency independently
  includeNormalize: false,
  bodyFontFamily: ['FilsonProBook'],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
  }),
})

export default createGlobalStyle`
  ${fontFace}
  ${typography.toString()}
`

// const GlobalStylesComponent =
// export default function GlobalStyles () {
//   return (
//     <>
//       <GlobalStylesComponent />
//     </>
//   )
// }
