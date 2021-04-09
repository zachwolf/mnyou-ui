import React from 'react'
import GlobalStyles from '@utils/GlobalStyles'
import ThemeProvider from '@utils/Theme'
import Div from '@atoms/Div'
import Footer from '@organisms/footer'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <ThemeProvider>
      <Div />
      <Footer />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </div>
)

export default Layout
