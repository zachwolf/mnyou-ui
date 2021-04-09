import React from 'react'
import { ThemeProvider } from 'styled-components'
import VerticalRhythm from 'compass-vertical-rhythm'

const { rhythm } = VerticalRhythm({
  baseFontSize: '20px',
  baseLineHeight: 1.618,
})

const theme = {
  color: {
    brand: {
      red: '#d3514e',
      tan: '#f6b784',
      brown: '#332821',
      white: '#f6faef',
    },
  },
  screen: {
    sm: {
      max: 480,
    },
    retina:
      '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  },
  fn: {
    rhythm,
  },
}

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
