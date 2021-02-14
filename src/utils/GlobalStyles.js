import { createGlobalStyle } from 'styled-components'
import Typography from 'Typography'
import FontFaceObserver from 'fontfaceobserver'
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
  font-family: 'Filson Pro';
  font-weight: normal;
  src: url(${require('@assets/fonts/FilsonProBook.woff2')}) format('woff2'),
       url(${require('@assets/fonts/FilsonProBook.woff')}) format('woff');
}
  
@font-face {
  font-family: 'Filson Pro';
  font-weight: bold;
  src: url(${require('@assets/fonts/FilsonProMedium.woff2')}) format('woff2'),
       url(${require('@assets/fonts/FilsonProMedium.woff')}) format('woff');
}

@font-face {
  font-family: 'Filson Soft';
  font-weight: bold;
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
  baseFontSize: '21px',
  bodyFontFamily: ['sans-serif'],
  baseLineHeight: 1.55,
  headerWeight: 'bold',
  bodyWeight: 'normal',
  boldWeight: 'bold',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      letterSpacing: '0.3px',
    },
    '.has-filson': {
      fontFamily: 'Filson Pro, sans-serif',
      fontSize: '20px',
      lineHeight: 1.618,
      letterSpacing: 'normal',
    },
  }),
})

/**
 * FOUT
 */

const filsonProBook = new FontFaceObserver('Filson Pro')

filsonProBook.load().then(() => {
  document.body.classList.add('has-filson')
})

/**
 * Creation
 */

export default createGlobalStyle`
  ${fontFace}
  ${typography.toString()}
`
