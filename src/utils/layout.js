import React from 'react'
import GlobalStyles from '@utils/GlobalStyles'
import ThemeProvider from '@utils/Theme'
import Div from '@atoms/Div'
import Footer from '@organisms/footer'
import Navigation from '@organisms/Navigation'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <ThemeProvider>
      <Div />
      <Footer />
      <Navigation />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </div>
)

export default Layout
