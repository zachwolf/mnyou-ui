import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Typography from 'typography'
import FontFaceObserver from 'fontfaceobserver'
import 'normalize.css'
import styled from 'styled-components'

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
  src: url(${require('@assets/fonts/FilsonProBook.woff2').default}) format('woff2'),
       url(${require('@assets/fonts/FilsonProBook.woff').default}) format('woff');
}
  
@font-face {
  font-family: 'Filson Pro';
  font-weight: bold;
  src: url(${require('@assets/fonts/FilsonProMedium.woff2').default}) format('woff2'),
       url(${require('@assets/fonts/FilsonProMedium.woff').default}) format('woff');
}

@font-face {
  font-family: 'Filson Soft';
  font-weight: bold;
  src: url(${require('@assets/fonts/FilsonSoftHeavy.woff2').default}) format('woff2'),
       url(${require('@assets/fonts/FilsonSoftHeavy.woff').default}) format('woff');
}`

/**
 * Type Styling
 *
 * FOUT minimized by matching Filson's weights and spacing to
 * the user's system default.
 *
 * Compare fonts: https://meowni.ca/font-style-matcher/
 */

 console.log('Typography', Typography.prototype.toJSON)

const typography = new Typography({
  title: 'MNyou',
  // explicitly imported to version dependency independently
  includeNormalize: false,
  baseFontSize: '21px',
  bodyFontFamily: ['sans-serif'],
  baseLineHeight: 1.55,
  headerFontFamily: ['sans-serif'],
  headerWeight: 'bold',
  bodyWeight: 'normal',
  boldWeight: 'bold',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options, styles) => ({
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
 * Wrap typographic styles in a class rather than root level.
 * 
 * Ideally, this would be accomplished leveraging Typography's
 * plugin functionality. However, internally, Typography uses
 * `lodash.merge` with `Array.reduce` to loop through plugin
 * functions. Lodash's `merge` doesn't provide a means to unset
 * object values.
 *
 * Additionally, Typography's `toString()` exists on the value
 * instance rather than prototype blocking modification during
 * instantiation.
 *
 * https://github.com/KyleAMathews/typography.js/blob/master/packages/typography/src/utils/createStyles.js#L267
 */
const foo = typography.toString.apply({
  toJSON: () => {
    console.log('intercept?', typography.toJSON())
    return {
    }
  }
})

console.log('----')
console.log('foo', foo)
console.log('----')


console.log('----')
console.log('typography.toString()', typography.toString)
console.log('----')

/**
 * Creation
 */

function GlobalStyles () {
  useEffect(() => {
    /**
     * Swap styles when fonts are ready
     */
    if (document) {
      const filsonProBook = new FontFaceObserver('Filson Pro')

      filsonProBook
        .load()
        .then(() => {
          document.body.classList.add('has-filson')
        })
        .catch(err => {
          console.log('err?')
          console.log(err)
        })

      return () => {
        document.body.classList.remove('has-filson')
      }
    }
  }, [])

  return (
    <Helmet>
      <style type="text/css">{`
        ${fontFace}
        ${typography.toString()}
      `}</style>
    </Helmet>
  )
}

export default GlobalStyles
