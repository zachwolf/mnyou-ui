import React, { useState } from 'react'
import PropTypes from 'prop-types'
import NavList from '@molecules/NavList'

function Navigation ({ siteTitle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const screenReaderMenuIconContent = isMenuOpen ?
    "Close main menu" :
    "Open main menu"
  const menuIconPath = isMenuOpen ?
    "M6 18L18 6M6 6l12 12" :
    "M4 6h16M4 12h16M4 18h16"

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex flex-grow justify-between">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
            </div>
            <NavList />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={e => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{screenReaderMenuIconContent}</span>
              <svg
                className="h-6 w-6 block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuIconPath}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <NavList sm />
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

