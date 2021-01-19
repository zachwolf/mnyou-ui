import React from 'react'
import GlobalStyles from '@utils/GlobalStyles'
import ThemeProvider from '@utils/Theme'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </div>
)

export default Layout
