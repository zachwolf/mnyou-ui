import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {}

export default function Theme ({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}