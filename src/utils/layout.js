import React from 'react'
import GlobalStyles from '@utils/GlobalStyles'
import ThemeProvider from '@utils/Theme'
import Navigation from '@organisms/Navigation'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <ThemeProvider>
      <GlobalStyles />
      <Navigation />
      {children}
    </ThemeProvider>
  </div>
)

export default Layout
