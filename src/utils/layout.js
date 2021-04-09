import React from 'react'
import GlobalStyles from '@utils/GlobalStyles'
import ThemeProvider from '@utils/Theme'
import Div from '@atoms/Div'
import Navigation from '@organisms/Navigation'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <ThemeProvider>
      <Div />
      <Navigation />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </div>
)

export default Layout
