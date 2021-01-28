import React, { useState, useContext } from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import LogoIcon from '@atoms/Logo'
import useWindowSize from '@utils/useWindowSize'

const NavBar = styled.nav`
  background: ${props => props.theme.color.brand.white};
  // height: ${props => props.theme.fn.rhythm(2)};

  @media (min-width: 480px) {
    // height: ${props => props.theme.fn.rhythm(3)};
  }
`

const Logo = styled.a``

const NavLink = styled.a``

const MenuToggle = styled.button``

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useWindowSize()
  const { screen, fn } = useContext(ThemeContext)
  const isMobile = width < screen.sm.max
  const screenReaderMenuIconContent = isMenuOpen
    ? 'Close main menu'
    : 'Open main menu'
  const menuIconPath = isMenuOpen
    ? 'M6 18L18 6M6 6l12 12'
    : 'M4 6h16M4 12h16M4 18h16'

  return (
    <NavBar>
      <Logo as={Link} to="/">
        <LogoIcon vertical={isMobile} height={fn.rhythm(1.5)} />
      </Logo>
      {/**
       * mobile menu button
       */}
      {isMobile && (
        <MenuToggle
          aria-expanded={isMenuOpen}
          onClick={e => setIsMenuOpen(!isMenuOpen)}
        >
          <VisuallyHidden>{screenReaderMenuIconContent}</VisuallyHidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
            height="24"
            width="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuIconPath}
            />
          </svg>
        </MenuToggle>
      )}
      {/**
       * Menu Items
       */}
      {!isMobile ||
        (isMenuOpen && (
          <ul>
            <li>
              <NavLink as={Link} to="/">
                About
              </NavLink>
            </li>
            <li>
              <NavLink as={Link} to="/">
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink as={Link} to="/">
                CSA Sign Up
              </NavLink>
            </li>
          </ul>
        ))}
    </NavBar>
  )
}

export default Navigation
