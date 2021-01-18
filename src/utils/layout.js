import React from 'react'
import GlobalStyles from '../components/atoms/GlobalStyles'
import Navigation from "../components/organisms/navigation"

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Navigation />
    {children}
  </div>
)

export default Layout
